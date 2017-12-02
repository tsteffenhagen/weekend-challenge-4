var app = angular.module ('PhotoApp', []);

app.controller('PhotoController', ['$http', function ($http) {
    console.log('PhotoController has been loaded');
    var self = this;
    self.message = "controller working";


    self.imageArray = [
        {
            source: "/images/img1.jpg",
            info:"image 1",
            show: false,
            likes: 0,
            opacity: "{opacity: 1}"
        },
        {
            source: "/images/img2.jpg",
            info: "image 2",
            show: false,
            likes: 0,
            opacity: "{opacity: 1}"
        },
        {
            source: "/images/img3.jpg",
            info: "image 3",
            show: false,
            likes: 0,
            opacity: "{opacity: 1}"
        },
        {
            source: "/images/img4.jpg",
            info: "image 4",
            show: false,
            likes: 0,
            opacity: "{opacity: 1}"
        },
        {
            source: "/images/img5.jpg",
            info: "image 5",
            show: false,
            likes: 0,
            opacity: "{opacity: 1}"
        },
        {
            source: "/images/img6.jpg",
            info: "image 6",
            show: false,
            likes: 0,
            opacity: "{opacity: 0}"
        },        
    ]

    self.addData = function (data) {  
        if (data.show == false) {
        data.show = true;     
        } else if (data.show == true) {
            data.show = false;
        } else {}
        
                if (data.opacity == "{opacity: 1}") {
                    data.opacity = "{opacity: 0.5}"
                } else if (data.opacity == "{opacity: 0.5}") {
                    data.opacity = "{opacity: 1}"
                } else {}
    }

    self.addOpacity = function (data) {

    }
    
    self.addLike = function (data) {
        data.likes ++;
    }

}]);