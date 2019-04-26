const electron = require("electron");
const app = electron.remote ? electron.remote.app : electron.app;
module.exports = {
    // Get project name
    name: app.getName(),

    // Get project version
    version: app.getVersion(),

    // Get current platform
    platform: process.platform,

    // Get current arch
    arch: process.arch,

    // Process enviroment
    env: process.env,

    // App data location
    userData: app.getPath("userData"),

    // is env set to dev
    isDev() {
        const isEnv = 'ELECTRON_IS_DEV' in this.env;
        const getEnv = parseInt(this.env.ELECTRON_IS_DEV, 10) === 1;
        return isEnv ? getEnv : !app.isPackaged;
    },

    // Is app packaged
    isPackaged() {
        return app.isPackaged;
    },

    // Is current OS Mac OSX
    isOSX() {
        return this.platform === "darwin";
    },

    // Is current OS windows
    isWindows() {
        return this.platform === "win32";
    },

    // Is current OS linux
    isLinux() {
        return this.platform === "linux";
    },

    // Is current OS of unix type
    isUnix() {
        return this.isOSX() || this.isLinux();
    },

    // Is CPU arch x86
    x86() {
        return this.arch === 'ia32';
    },

    // Is CPU arch x64
    x64() {
        return this.arch === 'x64';
    }
};