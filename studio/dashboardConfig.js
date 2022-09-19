export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '63288b4a970bf005dc487c31',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-test-studio-rikuhywn',
                  apiId: 'e8f61037-4bea-4839-a571-c5f951b98da8'
                },
                {
                  buildHookId: '63288b4bd0c56e0351cf9ebc',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-test-web-4e6dstsu',
                  apiId: '0ca9cc57-83ec-4095-ba16-54e8d054eea7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cemarguvanli/sanity-nextjs-test',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-test-web-4e6dstsu.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
