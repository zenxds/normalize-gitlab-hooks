import normalize from '../src'

describe('normalize', () => {
  test('it should normalize push event', () => {
    console.log(
      normalize({
        object_kind: 'push',
        before: 'dc82e7bbeb88895250d168117733b6a380f9aae0',
        after: '18b3ece294ccd048896f097a457dc5dd4d2334c8',
        ref: 'refs/heads/master',
        checkout_sha: '18b3ece294ccd048896f097a457dc5dd4d2334c8',
        user_id: 20,
        user_name: '乔林',
        user_username: 'dongshuang.xiao',
        user_email: '',
        user_avatar:
          'https://dev.dingxiang-inc.com:2020/uploads/-/system/user/avatar/20/avatar.png',
        project: {
          id: 60,
          name: 'constid-js',
          web_url: 'https://dev.dingxiang-inc.com:2020/ctu-group/constid-js',
          git_ssh_url:
            'ssh://git@dev.dingxiang-inc.com:2022/ctu-group/constid-js.git',
          namespace: 'ctu-group',
          path_with_namespace: 'ctu-group/constid-js'
        }
      })
    )
  })

  test('it should normalize tag push event', () => {
    console.log(
      normalize({
        object_kind: 'tag_push',
        before: '02feda924947ac3e8795841ef0fea72f6014c648',
        after: '0000000000000000000000000000000000000000',
        ref: 'refs/tags/publish/1.3208.0',
        checkout_sha: null,
        user_id: 20,
        user_name: '乔林',
        user_username: 'dongshuang.xiao',
        user_email: '',
        user_avatar:
          'https://dev.dingxiang-inc.com:2020/uploads/-/system/user/avatar/20/avatar.png',
        project: {
          id: 60,
          name: 'constid-js',
          web_url: 'https://dev.dingxiang-inc.com:2020/ctu-group/constid-js',
          git_ssh_url:
            'ssh://git@dev.dingxiang-inc.com:2022/ctu-group/constid-js.git',
          namespace: 'ctu-group',
          path_with_namespace: 'ctu-group/constid-js'
        }
      })
    )
  })

  test('it should normalize pipeline event', () => {
    console.log(
      normalize({
        object_kind: 'pipeline',
        object_attributes: {
          ref: 'daily/0.4.0',
          sha: '5ce4456657a863474b53dd95ca1eea0edd41b6dc',
          before_sha: '369b81914ed332418169a09464729e01270a3f29',
          status: 'success'
        },
        user: {
          id: 163,
          name: '孤城',
          username: 'hui.xu',
          avatar_url:
            'https://dev.dingxiang-inc.com:2020/uploads/-/system/user/avatar/163/avatar.png',
          email: '[REDACTED]'
        },
        project: {
          id: 171,
          name: 'saas-ui-i18n',
          web_url:
            'https://dev.dingxiang-inc.com:2020/public-service/saas-ui-i18n',
          git_ssh_url:
            'ssh://git@dev.dingxiang-inc.com:2022/public-service/saas-ui-i18n.git',
          namespace: 'saas-group',
          path_with_namespace: 'public-service/saas-ui-i18n'
        }
      })
    )
  })
})
