/**
    progress bar jquery plugin
    
    @Author H'academy
*/

(function($){
    if($ === undefined) throw 'require jquery';

    //External source - https://gist.github.com/ahtcx/0cd94e62691f539160b32ecda18af3d6
    const merge = (target, source) => {
        if(source){
            // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
            for (let key of Object.keys(source)) {
                if (source[key] instanceof Object) {
                    Object.assign(source[key], merge(target[key], source[key]));
                }
            }
            // Join `target` and modified `source`
            Object.assign(target || {}, source);
        }

        return target;
    }

    $.fn.progressbar = function(options){
        const settings = merge({
            color:"linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
            width:"100%",
            height:"5px",
            min:0,
            max:100,
            value:0,
            percent:{
                show:false,
                position:"right",
                color:"black",
            },
        }, options);

        return this.each(function(){
            settings.min = $(this).data("min") || settings.min;
            settings.max = $(this).data("max") || settings.max;
            settings.value = $(this).data("value") || settings.value;
            settings.color = $(this).data("color") || settings.color;
            settings.width = $(this).data("width") || settings.width;
            settings.height = $(this).data("height") || settings.height;

            settings.min = Math.min(settings.min, settings.max);
            settings.max = Math.max(settings.min, settings.max);
            settings.value = Math.max(settings.min, settings.value);
            settings.value = Math.min(settings.max, settings.value);

            $(this).addClass("hacademy-progress-bar").css({
                "width":settings.width,
                "height":settings.height,
                "box-sizing":"border-box",
                "position":"relative"
            });

            const innerDiv = $("<div>").addClass("guage").css({
                "width":"0%",
                "height":"100%",
                "background":settings.color,
                "position":"absolute",
                top:0, left:0, bottom:0
            });

            const getPercent = function(){
                const range = settings.max - settings.min;
                const percent = (settings.value - settings.min) / range * 100;
                return percent;
            };
            const calculate = function(){
                const percent = getPercent();
                innerDiv.css("width", percent+"%");
            };

            $(this).append(innerDiv);

            if(settings.percent.show){
                const textDiv = $("<div>").addClass("text").css({
                    "position":"absolute",
                    "color":settings.percent.color,
                }).text(getPercent()+"%");

                const offset = "7%";

                switch(settings.percent.position) {
                    case 'top': textDiv.css("bottom","100%").css("left","50%").css("transform","translateY(-50%)"); break;
                    case 'left': textDiv.css("top","50%").css("left",offset).css("transform","translateY(-50%)"); break;
                    case 'right': textDiv.css("top","50%").css("right",offset).css("transform","translateY(-50%)"); break;
                    case 'bottom': textDiv.css("top","100%").css("left","50%").css("transform","translateY(50%)"); break;
                }

                $(this).append(textDiv);
            }

            calculate();
        });
    }
})(jQuery);