// ls .git/refs
function normalizeRef(ref: string): string {
  return ref.replace(/refs\/(heads|tags)\//, '')
}

export default function normalize(data: Gitlab.PushEvent | Gitlab.TagPushEvent | Gitlab.PipelineEvent): Normalized.Event {
  if (data.object_kind === 'pipeline') {
    const attributes = data.object_attributes
    return {
      kind: data.object_kind,
      before: attributes.before_sha,
      after: attributes.sha,
      ref: attributes.ref,
      checkout_sha: attributes.sha,

      normalizedRef: normalizeRef(attributes.ref),

      status:  attributes.status,

      user: {
        name: data.user.name,
        username: data.user.username,
        email: data.user.email,
        avatar: data.user.avatar_url
      },

      project: {
        namespace: data.project.namespace,
        name: data.project.name,
        path_with_namespace: data.project.path_with_namespace,
        git_ssh_url: data.project.git_ssh_url,
        web_url: data.project.web_url
      }
    }
  }

  return {
    kind: data.object_kind,
    before: data.before,
    after: data.after,
    ref: data.ref,
    checkout_sha: data.checkout_sha,

    normalizedRef: normalizeRef(data.ref),

    user: {
      name: data.user_name,
      username: data.user_username,
      email: data.user_email,
      avatar: data.user_avatar
    },

    project: {
      namespace: data.project.namespace,
      name: data.project.name,
      path_with_namespace: data.project.path_with_namespace,
      git_ssh_url: data.project.git_ssh_url,
      web_url: data.project.web_url
    }
  }
}
