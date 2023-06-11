var divs = document.querySelectorAll('div.x78zum5');
var currentDivIndex = 0;

// divs.forEach(function(div) {
//     // Find the <span> element inside the current div
//     var  test = div.querySelectorAll('div.x78zum5')
//     test.forEach(function (val) {
//         var spanElement = div.querySelector('span.x1lliihq');
//
//         if (spanElement) {
//             // Log the text content of the <span> element
//             console.log(spanElement.textContent);
//             scrollToNextDiv()
//         }
//     })
// })

var videos = document.querySelectorAll('video');

// Iterate through each video element
videos.forEach(function(video) {
    // Check if the video is currently playing
    if (!video.paused) {
        // Perform actions on the currently playing video
        let currentDiv = video.closest('div.x78zum5.xdt5ytf')
        var parentDiv = document.querySelector('div');
        var divs = parentDiv.querySelectorAll('div.x78zum5.xdt5ytf');

        var index = Array.from(divs).indexOf(currentDiv);

        var spanElement = currentDiv.querySelector('span.x1lliihq');
        // console.log(index, divs.length)
        if (spanElement) {
            // console.log(currentDiv)
            // console.log(divs[index + 1])
            // var currentIndex = Array.from(currentDiv).findIndex(function(el) {
            //     return el.contains(event.target);
            // });
            // console.log(currentIndex)
            // let parentDiv = spanElement.closest('.x1sy10c2.x1gja9t.x8vdgqj')
            // divs[index + 1].scrollIntoView({ behavior: 'smooth' });

        }
    }
});

function scrollToNextDiv() {
    console.log(1111)
    console.log(divs.length)
    if (currentDivIndex < divs.length - 1) {
        console.log(222)
        currentDivIndex++;
        divs[currentDivIndex].scrollIntoView({ behavior: 'smooth' });
    }
}


