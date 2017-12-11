window.log = function log() {
    if (window.console && window.console.log) {
        window.console.log.apply(window.console, arguments) // eslint-disable-line
    }
}
