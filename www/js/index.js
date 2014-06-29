var app = {
    // Application Constructor
    initialize: function () {

        // Jquery Mobile Configuration
        $.mobile.pageContainer = $('#app');

        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        //$(document).ready(this.onDeviceReady);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        var screenSwiper = new Swiper('.swiper-container', {
            moveStartThreshold: 10,
            initialSlide: 1,
            touchRatio: 1.4,
            resistance: "100%",
            calculateHeight: true
        });

        /**
         * Navigation buttons
         */
        $(".slide-to-right").on("tap", function (e) {
            screenSwiper.swipeNext();
            e.stopPropagation();
            e.preventDefault();

        });

        $(".slide-to-left").on("tap", function (e) {
            screenSwiper.swipePrev();
            e.stopPropagation();
            e.preventDefault();
        });
    }
};
