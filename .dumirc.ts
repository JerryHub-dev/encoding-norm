import { defineConfig } from 'dumi';

const repo = 'encoding-norm'; // 项目名

export default defineConfig({
  title: 'encoding-norm',
  mode: 'site',
  devServer: {
    port: 1998 // 自定义端口号
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  
  // more config: https://d.umijs.org/config
  themeConfig: {
    name: '编码规范',
  },
});
