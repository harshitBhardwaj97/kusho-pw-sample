import MainConfig = CodeceptJS.MainConfig;

const config: MainConfig = {
    tests: './tests/*_test.ts',
    output: './output',
    helpers: {
        Playwright: {
            url: 'https://skillaccess-admin-alpha.vercel.app',
            show: true,
            browser: 'chromium',
        },
    },
    include: {
        I: './steps_file',
    },
    name: 'playwright',
};

export default config;
