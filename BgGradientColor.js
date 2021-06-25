
(function($){
    $.fn.BgGradientColor=function(options) {
        var settings= $.extend({
            items:2,
            defaultbgcolor:"-webkit-linear-gradient(43deg,#4158D0 0%,#C850C0 46%,#FFCC70 100%)",
            title:null,
            select:true,
            radiusselect:true,
            locale:'tr'
            //selectoption:'Yukarı aşağı,Aşağı yukarı,Soldan sağa,Sağdan sola,Yukarı soldan aşağı sağa,Aşağı sağdan yukarı sola,Yukarı sağdan aşağı sola,Aşağı soldan yukarı sağa',

        },options)
            return this.each(function(){
                BgGradientColor($(this))
                function BgGradientColor(elem){
                    
                    var element="<div class='Bgradientcard'><input type='hidden' class='hiddencolor' value='rgb(65, 88, 208)' /><input type='hidden' class='hiddencolor' value='rgb(200, 80, 192)' /><h7>Gradyent Seçimi</h7><div class='bgcolor'></div><div class='bgcolormenu'><input type='range' min='1' max='360' value='10'><select><option value='1'>Yukarı Aşağı</option><option value='2'> Aşağı Yukarı</option><option value='3'> Soldan Sağa</option><option value='4'> Sağdan Sola</option><option value='5'> Yukarı soldan aşağı sağa</option><option value='6'>Aşağı sağdan yukarı sola</option><option value='7'>Yukarı sağdan aşağı sola</option><option value='8'>Aşağı soldan yukarı sağa</option></select></div></div>";
                    elem.append(element);
                    //alert(settings.defaultbgcolor);
                    elem.find('.bgcolor').css('background',settings.defaultbgcolor);
                    if(options.title!=null)
                    {
                    elem.find('.Bgradientcard h7').text(options.title);
                    }
                    var radinput=elem.find('input')[2];
                    if(options.radiusselect==true)
                    {
                    $(radinput).on(' input change', function(){
                       SetBgradiusGradientColor(elem);
                    })
                    }
                    else{
                        $(radinput).remove();
                    }
                    if(options.select==true)
                    {
                    elem.find('select').change(function(){
                        SetselectGradientColor(elem);
                       })
                    }
                    else{
                        elem.find('select').remove();
                    }

                    LocaleLanguage(elem);
                }
                function LocaleLanguage(elem)
                {
                    var select="Yukarı aşağı,Aşağı yukarı,Soldan sağa,Sağdan sola,Yukarı soldan aşağı sağa,Aşağı sağdan yukarı sola,Yukarı sağdan aşağı sola,Aşağı soldan yukarı sağa";
                    if(settings.locale=="en")
                    {
                    select="to bottom,to top,to right,to left,to bottom right,to top left,to bottom left,to top right";
                    if(options.title==null)
                    {
                    elem.find('.Bgradientcard h7').text("Gradient Selector");
                    }
                    }
                    var i=0;
                    const optionlist=select.split(',');
                    $(elem).find('.bgcolormenu').each(function(){
                        i=0;
                        var options=$(this).find('option');
                        options.each(function(){
                            $(this).text(optionlist[i]);
                            i+=1;
                        })

                    })
                }
                function SetBgradiusGradientColor(elem){
                    var input=$(elem).find('input');
                    var radiusdeg=$(input[2]).val();
                    var color1=$(input[0]).val();
                    var color2=$(input[1]).val();
                    var bgcolor="-webkit-linear-gradient("+radiusdeg+"deg,"+color1+" 0%,"+color2+ " 100%)";
                    $(elem).find('.bgcolor').css('background',bgcolor);
                }
                function SetselectGradientColor(elem){
                    var bgcolorlist=['to bottom','to top','to right','to left','to bottom right','to top left','to bottom left','to top right'];
                    var gradientselect=parseInt($(elem).find('select').val());
                    var input=$(elem).find('input');
                    var color1=$(input[0]).val();
                    var color2=$(input[1]).val();
                    var bgcolor="linear-gradient("+bgcolorlist[gradientselect-1]+","+color1+','+color2+")";
                    $(elem).find('.bgcolor').css('background',bgcolor);
                }
            })

    }

}(jQuery));
