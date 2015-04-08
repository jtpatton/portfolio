app
	.controller('portfolioCtrl',['$scope', function($scope){
        $(".window-contain").draggable({handle: ".windowhead", containment: [ 105, 50, 10000, 10000]});
        
        $scope.pieces = [
            {
                title: 'Web Hosting Hub',
                img: 'webhostinghub.jpg',
                url: 'http://www.webhostinghub.com',
                tech: 'HTML5, CSS3, JavaScript, PHP, MySQL, Silex',
                description: 'After about 4 months of working at InMotion Hosting, I got put as lead front-end web developer on the Web Hosting Hub redesign project. This job consisted of me setting up the PHP framework the site runs on, and writing the HTML, CSS and JavaScript.'
            },
            {
                title: 'InMotion Hosting',
                img: 'inmotion.jpg',
                url: 'http://inmotionhosting.com',
                tech: 'HTML5, CSS3, JavaScript, PHP, Silex',
                description: 'My main project at InMotion Hosting consists of me turning the site responsive by restructuring the layout for Twitter Bootstrap. I also take care of maintaining both front-end and back-end code for both inmotionhosting.com and webhostinghub.com.'
            },
            {
                title: 'StreamQuote',
                img: 'streamquote.jpg',
                url: 'http://jtpatton.com/streamquote',
                tech: 'HTML5, CSS3, JavaScript, jQuery',
                description: 'StreamQuote is an interactive quote site where the user hovers over an image of a famous/historical figure, and their name and a quote from them appears. This was built because other famous quote sites are either not fun to use or are hard to look at.'
            },
            {
                title: 'Summit Theme',
                img: 'summit.jpg',
                url: 'http://jtpatton.com/blog',
                tech: 'WordPress, HTML5, CSS3, jQuery, PHP',
                description: 'Summit is a theme I created from scratch for WordPress with the help of the SiteGround and Themeshaper WordPress tutorials. It was created as a portfolio website others could use and modify, and I am planning on putting it up for sale on Theme Forest.'
            },
            {
                title: 'Shred List',
                img: 'shredlist.jpg',
                url: 'http://jtpatton.com/shredlist',
                tech: 'Ratchet, HTML5, CSS3, JavaScript, jQuery',
                description: 'This app is for snowboarders who want to create their own list of tricks to complete during the snowboard season. They can manage how many tricks they have completed and how many are on their list. This is created in HTML and JavaScript with a mobile framework called Ratchet.'
            },
            {
                title: 'EduChord',
                img: 'educhord.jpg',
                url: 'http://jtpatton.com/educhord',
                tech: 'HTML5, CSS3, JavaScript, jQuery, Pure',
                description: 'EduChord is an interactive way to learn how to learn and play guitar chords for motivated beginners. There is even an optional quiz to complete once the user feels confident enough in their basic guitar chord knowledge. This site uses the Pure CSS framework and the chords are made completely in HTML.'
            },
            {
                title: 'Walden',
                img: 'walden.jpg',
                url: 'http://jtpatton.com/walden',
                tech: 'HTML5, CSS3, jQuery, Responsive',
                description: 'Walden is a fictional skateboard company website made to promote their skateboards and skateboarding in general. The audience of this site is meant to be more expeienced skaters. This site won me 2 best of quarter awards for Digital Site Identity and Intermediate Web Design.'
            },
            {
                title: 'JS Chat',
                img: 'chat.jpg',
                url: 'http://jtpatton.com/chat',
                tech: 'HTML5, CSS3, JavaScript, Firebase, jQuery',
                description: 'JS Chat is a realtime chatroom made entirely from JavaScript and HTML... No PHP or MySql included. It was created using the Firebase API, a realtime backend service helping take a load off my server.'
            },
            {
                title: 'Skateboard Illustration',
                img: 'illustration-skateboard.jpg',
                tech: 'Adobe Illustrator',
                description: 'This photo-realistic illustration of a skateboard took about 40 hours to create using only illustrator.'
            }
        ];

        $(function(){
            $('.portfolio > .row').hover(function(){
                if(window.innerWidth > 1100){
                    $(this).children('.col6').children('a').children('img').addClass('hover');
                }
            },function(){
                $(this).children('.col6').children('a').children('img').removeClass('hover');
            });
        });
    }])