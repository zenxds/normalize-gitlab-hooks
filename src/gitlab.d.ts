declare namespace Gitlab {
  interface PushUser {
    user_id: number
    // 昵称
    user_name: string
    // 登录名
    user_username: string
    user_email: string
    user_avatar: string
  }

  interface BaseEvent {
    project: {
      id: number
      namespace: string
      name: string
      path_with_namespace: string
      git_ssh_url: string
      web_url: string
    }
  }

  interface PushEvent extends BaseEvent, PushUser {
    object_kind: 'push'

    before: string
    after: string
    // refs/heads/master
    ref: string

    // 与after相等
    checkout_sha: string
  }

  interface TagPushEvent extends BaseEvent, PushUser {
    object_kind: 'tag_push'

    before: string
    // 删除时是0000000000000000000000000000000000000000
    after: string
    // refs/tags/v1.0.0
    ref: string

    // 与after相等，为null时是删除
    checkout_sha: string | null
  }

  interface PipelineEvent extends BaseEvent {
    object_kind: 'pipeline'

    object_attributes: {
      before_sha: string
      sha: string
      status: string
      ref: string
    }

    user: {
      id: number
      name: string
      username: string
      email: string
      avatar_url: string
    }
  }
}
