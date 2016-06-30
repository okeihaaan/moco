 $(function(){
   $('h1').text('hello jQuery').css('color','red');

   //smooth Scroll
   $('a[href^=#]').click(functuin(){
      var href   = $(this).attr("href");
      var target = $(href);
      var posTop = target.offset().top;

        $('body,html').animate({ scrollTop : psoTop}, 300, 'swing');
        return false;
        });
    });

   //accordion Menu
   $("mainMenu > li >a").on("click",function(){
      var speed ="fast";
      var parent = $(this).parent("li");

          $(this).next('.subMenu').slidetoggle("speed"parent.prevAll().children(".subMenu").hide(speed);
          parent.prevAll().children(".subMenu").hide(speed);
          });
   });
   $('tab-menu > li > a').cilck(functin(){
      var pageNum = $(this).attr('data-page');
      var pageId  ="#tab" + pageNum;

      $('div.tab-page').hide();
      $(pageId).show();
   });
 });
