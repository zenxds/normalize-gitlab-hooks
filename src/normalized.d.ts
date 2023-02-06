declare namespace Normalized {
  interface Event {
    kind: string
    before: string
    after: string
    ref: string

    normalizedRef: string

    checkout_sha: string | null

    // for pipeline
    status?: string

    user: {
      name: string
      username: string
      email: string
      avatar: string
    }

    project: {
      name: string
      namespace: string
      path_with_namespace: string
      git_ssh_url: string
      web_url: string
    }

  }
}
