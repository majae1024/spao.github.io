/* 헤더메뉴 */
$(".menu > li")
  .mouseover(function () {
    $(this).children(".subBox").stop().show();
  })
  .mouseout(function () {
    $(".subBox").stop().hide();
  });
$(".menu > li")
  .mouseover(function () {
    $(this).children(".subBox1").stop().show();
  })
  .mouseout(function () {
    $(".subBox1").stop().hide();
  });
/* 배너슬라이드 이전버튼 */
function prev() {
  $(".slide li:last").prependTo(".slide");

  $(".slide").css("margin-left", -1400); // $('.slide').css({marginLeft:-1000});

  $(".slide").stop().animate({ marginLeft: 0 }, 800);
}
/* 배너슬라이드 다음버튼 */
function next() {
  $(".slide")
    .stop()
    .animate({ marginLeft: -1400 }, function () {
      $(".slide li:first").appendTo(".slide");

      $(".slide").css({ marginLeft: 0 });
    });
}
/* 배너슬라이드 자동 */
function slide() {
  $(".slide")
    .stop()
    .animate({ marginLeft: -1400 }, function () {
      $(".slide li:first").appendTo(".slide");

      $(".slide").css({ marginLeft: 0 });
    });
}
setInterval(slide, 3000);

/* 이전, 다음 버튼기능 설정 */
$(".prev").click(function () {
  prev();
});

$(".next").click(function () {
  next();
});

/* new 상품 슬라이더*/
function newslide() {
  $(".productWrap")
    .stop()
    .animate({ marginLeft: -260 }, function () {
      $(".productWrap li:first").appendTo(".productWrap");

      $(".productWrap").css({ marginLeft: 0 });
    });
}
setInterval(newslide, 3000);

/*weekly ajax*/
$(document).ready(function () {
  $.ajax({
    url: "./js/json/weekly.json",
    dataType: "json",
    success: function (data) {
      console.log("Number of .new_product elements:", $(".wProduct").length);
      console.log("Data length:", data.length);

      if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          if (i < $(".wProduct").length) {
            $(".wProduct").eq(i).prepend(`
                          
                              <a href="#">
                                  <img src="${data[i].img}" alt="1">
                                  <div>
                                    <h4>${data[i].number}</h4>
                                  </div>
                              </a>
                              <h5><a href="#">${data[i].name}</a></h5>
                              <div class="priceBox">
                                  <span class="price">${data[i].price}</span>
                                  <span class="priceDel"><del>${data[i].priceDel}</del></span>
                                  <span class="sale">${data[i].sale}</span>
                              </div>
                              <div class="colorBox">
                                  <span style="background-color:${data[i].color_option_1}"></span>
                                  <span style="background-color:${data[i].color_option_2}"></span>
                                  <span style="background-color:${data[i].color_option_3}"></span>
                              </div>
                              <p>${data[i].review_cnt}</p>
                              <div class="minibox">
                                <div class="mini">
                                  ${data[i].gender}
                                </div>
                              </div>
                      `);
          } else {
            console.warn(`No .new_product element available for index ${i}`);
          }
        }
      }
    },
  });
});
/* new ajax */
$(document).ready(function () {
  $.ajax({
    url: "./js/json/new.json",
    dataType: "json",
    success: function (data) {
      console.log("Number of .new_product elements:", $(".newProduct").length);
      console.log("Data length:", data.length);

      if (data.length > 0) {
        for (let j = 0; j < data.length; j++) {
          if (j < $(".newProduct").length) {
            $(".newProduct").eq(j).prepend(`
                          
                              <a href="#">
                                  <img src="${data[j].img}" alt="1">
                                  <div>
                                    <h4>${data[j].number}</h4>
                                  </div>
                              </a>
                              <h5><a href="#">${data[j].name}</a></h5>
                              <div class="priceBox">
                                  <span class="price">${data[j].price}</span>
                                  <span class="priceDel"><del>${data[j].priceDel}</del></span>
                                  <span class="sale">${data[j].sale}</span>
                              </div>
                              <div class="colorBox">
                                  <span style="background-color:${data[j].color_option_1}"></span>
                                  <span style="background-color:${data[j].color_option_2}"></span>
                                  <span style="background-color:${data[j].color_option_3}"></span>
                              </div>
                              <p>${data[j].review_cnt}</p>
                              <div class="minibox">
                                <div class="mini">
                                  ${data[j].gender}
                                </div>
                              </div>
                      `);
          } else {
            console.warn(`No .new_product element available for index ${j}`);
          }
        }
      }
    },
  });
});
