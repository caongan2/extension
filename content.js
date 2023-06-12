setInterval(function () {

    var videos = document.querySelectorAll('video');

    videos.forEach(function (video) {
        if (!video.paused) {
            let currentDiv = video.closest('div.x78zum5.xdt5ytf')
            var parentDiv = currentDiv.parentElement.parentElement;
            var divs = parentDiv.querySelectorAll('div.x78zum5.xdt5ytf');
            let spans = currentDiv.querySelectorAll('span')
            var index = Array.from(divs).indexOf(currentDiv);

            var black_lists = ["chu minh hạnh", "Cô Đơn Trên Sofa", "số học",
                "đào tạo", "quảng cáo", "chạy quảng cáo", "số học",
                "phòng khám", "cắt bao quy đầu", "nha khoa", "chủ tịch",
                "gạo nếp gạo tẻ", "acb", "cây táo nở hoa", "người ấy là ai", "trấn thành", "a xìn", "phòng khám"]

            spans.forEach(function (el) {
                black_lists.forEach(function (item) {
                    if (el.textContent.toLowerCase().includes(item.toLowerCase())) {
                        // divs[index + 13].scrollIntoView({behavior: 'smooth'});
                        divs[index].style.display = 'none'
                        console.log("success")
                    } else {
                        console.log("That great")
                    }
                })
            })
        }
    });

}, 100)