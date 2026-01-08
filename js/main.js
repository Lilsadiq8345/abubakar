(function ($) {
    "use strict";

    // Preloader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1000);
    };
    loader();

    // Initialize WOW.js for scroll animations
    if (typeof WOW !== 'undefined') {
        new WOW().init();
    }

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow').css('display', 'flex');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Sticky Navbar with enhanced functionality
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });

    // Smooth scrolling for navigation links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var target = $(this.hash);
            var offset = target.offset().top - 80;

            $('html, body').animate({
                scrollTop: offset
            }, 1500, 'easeInOutExpo');

            // Update active navigation
            $('.navbar-nav .nav-link').removeClass('active');
            $(this).addClass('active');
        }
    });

    // Update active navigation on scroll
    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();

        $('section').each(function (i) {
            if ($(this).position().top - 100 <= scrollDistance) {
                $('.navbar-nav .nav-link.active').removeClass('active');
                $('.navbar-nav .nav-link').eq(i).addClass('active');
            }
        });
    });

    // Enhanced Typed.js initialization
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }

    // Animated skill progress bars with intersection observer
    if ('IntersectionObserver' in window) {
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBars = entry.target.querySelectorAll('.progress .progress-bar');
                    progressBars.forEach(bar => {
                        const percentage = bar.getAttribute('aria-valuenow');
                        bar.style.width = '0%';
                        setTimeout(() => {
                            bar.style.width = percentage + '%';
                        }, 200);
                    });
                    skillObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.skill-category').forEach(category => {
            skillObserver.observe(category);
        });
    } else {
        // Fallback for older browsers
        $('.skills').waypoint(function () {
            $('.progress .progress-bar').each(function () {
                $(this).css("width", $(this).attr("aria-valuenow") + '%');
            });
        }, { offset: '80%' });
    }

    // Enhanced timeline animations
    if ('IntersectionObserver' in window) {
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, { threshold: 0.3 });

        document.querySelectorAll('.timeline-item').forEach(item => {
            timelineObserver.observe(item);
        });
    }

    // Testimonials carousel with enhanced options
    if ($(".testimonials-carousel").length > 0) {
        $(".testimonials-carousel").owlCarousel({
            center: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            dots: true,
            loop: true,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }

    // Enhanced portfolio filtering with smooth animations
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows',
        transitionDuration: '0.6s'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');

        var filterValue = $(this).data('filter');
        portfolioIsotope.isotope({ filter: filterValue });

        // Add animation to filtered items
        setTimeout(() => {
            $('.portfolio-item').each(function () {
                $(this).addClass('animate__animated animate__fadeInUp');
            });
        }, 300);
    });

    // Enhanced lightbox for portfolio
    if (typeof lightbox !== 'undefined') {
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            'albumLabel': 'Project %1 of %2'
        });
    }

    // Contact form enhancement with Supabase
    $('.contact-form form').on('submit', async function (e) {
        e.preventDefault();

        // Initialize Supabase (Use your actual project URL and Anon Key)
        // placeholder credentials - User must update these
        const supabaseUrl = 'https://lgecmcprwqqbuhcpegko.supabase.co';
        const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnZWNtY3Byd3FxYnVoY3BlZ2tvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc4NDk1MTMsImV4cCI6MjA4MzQyNTUxM30.E5rTV9mTojP3k4dSWdDGgVJeLvJyQey0clTM0I7AWVc';

        // Simple check if credentials are still placeholders
        if (supabaseUrl === 'YOUR_SUPABASE_URL' || supabaseKey === 'YOUR_SUPABASE_ANON_KEY') {
            alert('Please configure Supabase credentials in js/main.js');
            return;
        }

        const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

        const submitBtn = $(this).find('button[type="submit"]');
        const originalBtnText = submitBtn.text();

        // Disable button and show loading state
        submitBtn.prop('disabled', true).text('Sending...');

        const name = $(this).find('input[placeholder="Your Name"]').val();
        const email = $(this).find('input[placeholder="Your Email"]').val();
        const subject = $(this).find('input[placeholder="Subject"]').val();
        const message = $(this).find('textarea[placeholder="Your Message"]').val();

        try {
            const { data, error } = await _supabase
                .from('messages')
                .insert([
                    { name: name, email: email, subject: subject, message: message }
                ]);

            if (error) throw error;

            alert('Thank you for getting in touch! Your message has been successfully sent. I will review it and get back to you within 24 hours.');
            $(this)[0].reset();
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message securely. Opening your email client instead...');
            // Fallback to mailto if Supabase fails
            var mailto = 'mailto:abubakarsa242@gmail.com'
                + '?subject=' + encodeURIComponent(subject || 'Contact from Portfolio')
                + '&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
            window.location.href = mailto;
        } finally {
            submitBtn.prop('disabled', false).text(originalBtnText);
        }
    });

    // Parallax effect for hero section
    $(window).scroll(function () {
        var scrolled = $(window).scrollTop();
        var parallax = $('.hero');
        var speed = 0.5;

        parallax.css('transform', 'translateY(' + (scrolled * speed) + 'px)');
    });

    // Tech stack hover effects
    $('.tech-item').hover(
        function () {
            $(this).find('i').addClass('animate__animated animate__pulse');
        },
        function () {
            $(this).find('i').removeClass('animate__animated animate__pulse');
        }
    );

    // Smooth reveal animations for sections
    function revealOnScroll() {
        var scrolled = $(window).scrollTop();
        var win_height_padded = $(window).height() * 0.8;

        $(".reveal:not(.animated)").each(function () {
            var $this = $(this),
                offsetTop = $this.offset().top;

            if (scrolled + win_height_padded > offsetTop) {
                if ($this.data('timeout')) {
                    window.setTimeout(function () {
                        $this.addClass('animated ' + $this.data('animation'));
                    }, parseInt($this.data('timeout'), 10));
                } else {
                    $this.addClass('animated ' + $this.data('animation'));
                }
            }
        });
    }

    $(window).scroll(revealOnScroll);
    revealOnScroll();

    // Enhanced mobile menu
    $('.navbar-toggler').on('click', function () {
        $(this).toggleClass('active');
    });

    // Close mobile menu when clicking on a link
    $('.navbar-nav .nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
        $('.navbar-toggler').removeClass('active');
    });

    // Performance optimization: Throttle scroll events
    function throttle(func, limit) {
        var inThrottle;
        return function () {
            var args = arguments;
            var context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // Apply throttling to scroll events
    $(window).scroll(throttle(function () {
        // Scroll-based animations
    }, 16)); // ~60fps

    // Initialize tooltips if Bootstrap is available
    if (typeof bootstrap !== 'undefined') {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }

    // Add loading animation to images
    $('img').on('load', function () {
        $(this).addClass('loaded');
    });

    // Error handling for failed image loads
    $('img').on('error', function () {
        $(this).addClass('error');
    });

    // Console welcome message
    console.log('%c👋 Welcome to Abubakar\'s Portfolio!', 'color: #2563eb; font-size: 20px; font-weight: bold;');
    console.log('%c🚀 Built with modern web technologies', 'color: #64748b; font-size: 14px;');

})(jQuery);

