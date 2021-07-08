import { resolve } from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

export const onCreateWebpackConfig = ({ actions }: any) => {
  actions.setWebpackConfig({
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
      plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
      alias: {
        '@src': resolve(__dirname, 'src'),
      },
    },
  });
};

export const onCreatePage = async ({ page, actions }: any) => {
  const { createPage } = actions;

  if (page.path.match(/^\/app/)) {
    page.matchPath = '/app/*';
    // Update the page.
    createPage(page);
  }
};
