// https://jestjs.io/docs/configuration#setupfilesafterenv-array
// https://velog.io/@katanazero86/ReactNo-CRA-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-Jest-%EA%B5%AC%EC%84%B1%ED%95%B4%EB%B3%B4%EA%B8%B0
// https://gatsbybosungblogmain.gatsbyjs.io/tdd3/
// https://kmseop.tistory.com/233
// https://marshallku.com/web/tips/react-%ED%85%8C%EC%8A%A4%ED%8A%B8-%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0

// 중요
// https://junseublim.github.io/etc/Jest-Configuration/

import type { Config } from 'jest';

const config: Config = {
  roots: ['<rootDir>'],
  testEnvironment: 'jsdom',
  // moduleNameMapper: {
  //   '\\.(css|less|svg)$': 'identity-obj-proxy',
  // },
  setupFilesAfterEnv: ['<rootDir>/src/test/setup.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};

module.exports = config;
