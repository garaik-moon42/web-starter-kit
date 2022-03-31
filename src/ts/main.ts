function init() {
    console.log("Happy coding!");
}

(function(fn) {
    if (document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
})(init);
