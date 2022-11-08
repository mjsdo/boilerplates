const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: '> 1%, not dead',
        useBuiltIns: 'usage',
        corejs: { version: '3' },
      },
    ],
    [
      '@babel/preset-react',
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      isDevelopment && require.resolve('react-refresh/babel'),
    ].filter(Boolean),
  ],
};