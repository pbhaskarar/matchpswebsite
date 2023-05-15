//Dropdown hover
const $dropdown = $(".navbar-nav > .dropdown");
const $dropdownToggle = $(".navbar-nav > .dropdown > .dropdown-toggle");
const $dropdownMenu = $(".navbar-nav > .dropdown > .dropdown-menu");

const $dropdown2 = $(".dropdown-submenu");
const $dropdownToggle2 = $(".dropdown-submenu > .dropdown-toggle");
const $dropdownMenu2 = $(".dropdown-submenu > .dropdown-menu");

const showClass = "show";
$(window).on("load resize", function() {
    if (this.matchMedia("(min-width: 768px)").matches) {
        $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
        );
        $dropdown2.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle2).attr("aria-expanded", "true");
                $this.find($dropdownMenu2).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle2).attr("aria-expanded", "false");
                $this.find($dropdownMenu2).removeClass(showClass);
            }
        );
    } else {
        $dropdown.off("mouseenter mouseleave");
        $dropdown2.off("mouseenter mouseleave");

        $(function () {
            // Multi Level dropdowns on Click for Mobile
            $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function (event) {
                event.preventDefault();
                event.stopPropagation();

                $(this).siblings().toggleClass("show");


                if (!$(this).next().hasClass('show')) {
                    $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
                }
                $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
                    $('.dropdown-submenu .show').removeClass("show");
                });

            });
        })
    }
});

// our customers

$(document).ready(function () {
    $(".responsive").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

$('.single-item').slick({
    arrows: false,
    dots:true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
});

$('.single-testimonial').slick({
    arrows: true,
    dots:false,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    prevArrow: '<span class="prev_arrow"><i class="bi bi-caret-left-fill"></i></span>',
    nextArrow: '<span class="next_arrow"><i class="bi bi-caret-right-fill"></i></span>',
});


//case study

$('.autoplay').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 300,
    autoplay: false,
    autoplaySpeed: 2000,
    //prevArrow: '<span class="prev_arrowss"><i class="bi bi-arrow-left"></i></span>',
    //nextArrow: '<span class="next_arrow"><i class="bi bi-arrow-right"></i></span>',
    prevArrow: '<div class="text-endsp text-end d-inline-block mb-3"><a href="#" class="btn view-all-btn">View All</a><button type="button" class="btn btn-circle rounded-48"><i class="bi bi-arrow-left"></i></button> <button type="button" class="btn btn-circle rounded-48"><i class="bi bi-arrow-right"></i></button></div>',
	nextArrow: '',
    responsive: [{
		breakpoint: 768,
		settings: {
			slidesToShow: 1
		}
	}
  ]
});