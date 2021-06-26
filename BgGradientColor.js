
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
                    //var element="<div class='Bgradientcard'><input type='hidden' class='hiddencolor' value='rgb(65, 88, 208)' /><input type='hidden' class='hiddencolor' value='rgb(200, 80, 192)' /><h7>Gradyent Seçimi</h7><div class='bgcolor'></div><div class='bgcolormenu'><input type='range' min='1' max='360' value='10'><select><option value='1'>Yukarı Aşağı</option><option value='2'> Aşağı Yukarı</option><option value='3'> Soldan Sağa</option><option value='4'> Sağdan Sola</option><option value='5'> Yukarı soldan aşağı sağa</option><option value='6'>Aşağı sağdan yukarı sola</option><option value='7'>Yukarı sağdan aşağı sola</option><option value='8'>Aşağı soldan yukarı sağa</option></select></div></div>";
                    var element="<div class='Bgradientcard'><h7>Gradyent Seçimi</h7><div class='bgcolor'></div><div class='bgcolormenu'><input type='range' min='1' max='360' value='10'><select><option value='1'>Yukarı Aşağı</option><option value='2'> Aşağı Yukarı</option><option value='3'> Soldan Sağa</option><option value='4'> Sağdan Sola</option><option value='5'> Yukarı soldan aşağı sağa</option><option value='6'>Aşağı sağdan yukarı sola</option><option value='7'>Yukarı sağdan aşağı sola</option><option value='8'>Aşağı soldan yukarı sağa</option></select></div></div>";
                    elem.append(element);
                    //alert(settings.defaultbgcolor);
                    elem.find('.bgcolor').css('background',settings.defaultbgcolor);
                    if(options.title!=null)
                    {
                    elem.find('.Bgradientcard h7').text(options.title);
                    }
                    var radinput=$(elem).find('input[type="range"]');
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
                    if(options.items)
                    {
                        var divinpt="";
                        if(options.items>4)
                        {
                            options.items=4;
                        }
                        var defbgcolor= options.defaultbgcolor.split(',');
                        if(defbgcolor.length-1!=options.items)
                        {
                            alert("Default seçenek girdisi yanlış!");
                            return false;
                        }
                        for(var h=0;h<options.items;h++)
                        {
                            var sep='"';
                            var onclick="onclick="+sep+"$('#cpinput-"+h+1+"').click()"+sep;
                            var  spbgcolor="style=' background:"+defbgcolor[h+1].replaceAll(')',"")+"'";
                            divinpt+="<input value='"+defbgcolor[h+1].replaceAll(')',"")+"' id='cpinput-"+h+1+"' class='colorpickerinput' type='color' /><span "+onclick+spbgcolor+ "id='scpinput-"+h+1+"' class='colorpickerspan'></span>";
                        }
                        elem.find('.Bgradientcard').append("<div style='margin-top:60px' class='bgcolormenu'>"+divinpt+"</div>");              
                        var hgth=(parseInt(elem.css('height'))+60).toString()+"px";
                        elem.css('height',hgth);
                        elem.find('.colorpickerinput').change(function(){
                            if(options.select==true)
                            {
                            SetColorPicker(this);
                            SetselectGradientColor(elem);
                            }
                            else
                            {
                            SetColorPicker(this);
                            SetBgradiusGradientColor(elem);
                            }
                           })                        
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
                    var radiusdeg=$(elem).find('input[type="range"]').val();
                    var colorlist="";
                    $(elem).find('input[type="color"]').each(function(){
                        colorlist+=','+$(this).val();
                    })
                    var bgcolor="-webkit-linear-gradient("+radiusdeg+"deg"+colorlist+")";
                    $(elem).find('.bgcolor').css('background',bgcolor);
                }
                function SetselectGradientColor(elem){
                    var bgcolorlist=['to bottom','to top','to right','to left','to bottom right','to top left','to bottom left','to top right'];
                    var gradientselect=parseInt($(elem).find('select').val());
                    var colorlist="";
                    $(elem).find('input[type="color"]').each(function(){
                        colorlist+=','+$(this).val();
                    })
                    var bgcolor="linear-gradient("+bgcolorlist[gradientselect-1]+colorlist+")";
                    $(elem).find('.bgcolor').css('background',bgcolor);
                }
                function SetColorPicker(elem)
                {
                   var spcid="s"+ $(elem).attr("id");
                   $('#'+spcid).css('background',$(elem).val());
                   
                }
            })

    }

}(jQuery));
