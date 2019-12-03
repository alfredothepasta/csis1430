let counter = 0;
let videos = [
    '<iframe width="100%"  src="https://www.youtube.com/embed/u2aQIGcgtt4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="100%"  src="https://www.youtube.com/embed/GY-qAVR1HjE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="100%"  src="https://www.youtube.com/embed/b2mOopjYh8g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="100%"  src="https://www.youtube.com/embed/jZ2ZgSiaEf0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="100%"  src="https://www.youtube.com/embed/9UTDGknum4c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="100%"  src="https://www.youtube.com/embed/7abE9Q-ps_A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="100%"  src="https://www.youtube.com/embed/z18fWl8h4vU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="100%"  src="https://www.youtube.com/embed/yVGN72-p-DU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="100%"  src="https://www.youtube.com/embed/vVcih1hommE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="100%"  src="https://www.youtube.com/embed/Ji9hVeA9v-I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
];
let videosDescriptionList = [
    'My very first animation project, the idea was that we took a toy, plotted a course, and took photos for each frame. We didn\'t preplan the motion or speed, instead the animation was done "straight forward".',
    'My second animation project, whihc was all about "pose to pose" animation, where you draw the initial pose and the final pose, and plan the motion in between each.',
    'We moved up in the world a bit, on towards animating two bouncing balls! The learning goal of this assignment was squash and stretch, note the way each ball elongates as it moves faster and squashes as it decelerates. The image is so dark because each ball was drawn on its own set of paper without a transparency. The two pictures were averaged together to make them both show up.',
    'No longer in the realm of 2D, this animation focused on the idea of follow through. Note the way the tail moves.',
    'Moving up in complexity now, this is the flour-sack animation. The idea is to help solidify the idea of adding personality to an object through animation.',
    'Moving forward a year, we\'re now at basic character animation. A simple walk cycle for a ball with legs.',
    'Here we have our first animation set to dialogue. We picked a line from a movie, had a friend record it, and animated a character to it.',
    'Fast forward again, to 3D animation. This is a compilation of all the animations I produced in that class. The progression is much the same as earlier animations, just applying the same concepts in 3D. ',
    'This was an animation I made for the Skills USA national competition 2014. My partner and I came in fourth place overall.',
    'This is my final production at SLCC. I made this with the help of Brandon Craghead, who did an excellent job on all of the modeling for the backgrounds and, notably, the piano. This is about as complete as it will ever get unless I decide to someday go back in and finish it. Knowing me though, I\'d have to redo half the animation to be happy. Enjoy!'
];
let titles = [
    'Straight Forward Animation',
    'Pose to Pose Animation',
    '2 Ball Bounce Animation',
    'Ball With Tail Animation',
    'Flour Sack Animation',
    'Vanilla Walk Animation',
    'Monologue Animation',
    '3D Animation Compilation',
    'Skills USA Entry',
    'Final Project: Magnum Opus',
];
let animationTitle = document.getElementById('animationTitle');
let videoDescription = document.getElementById('videoDescription');
let videoSection = document.getElementById('videoSection');
animationTitle.textContent = titles[0];
videoDescription.textContent = videosDescriptionList[0];
videoSection.innerHTML = videos[0];
document.getElementById('navigation').addEventListener('click', function (e) {
    e.preventDefault();
    let target = e.target;
    let link;
    if (e.target instanceof HTMLAnchorElement) {
        link = e.target;
        console.log(link);
        if (link.id == 'next') {
            nextVid();
        }
        else {
            lastVid();
        }
    }
    else {
    }
});
function nextVid() {
    if (++counter == videos.length) {
        counter = 0;
    }
    animationTitle.textContent = titles[counter];
    videoDescription.textContent = videosDescriptionList[counter];
    videoSection.innerHTML = videos[counter];
}
function lastVid() {
    if (--counter < 0) {
        counter = videos.length - 1;
    }
    animationTitle.textContent = titles[counter];
    videoDescription.textContent = videosDescriptionList[counter];
    videoSection.innerHTML = videos[counter];
}
