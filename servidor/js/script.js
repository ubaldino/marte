jQuery(function(){
    config=new(function(){
        this.server='http://bridge/lib/ajax.php'
        this.sender=function(task){
            jQuery.post(config.server,{'task':task},function(data){
                console.log(data)
            })
        }
        this.vdelta=function(x,y){
            jQuery.post(config.server,{'task':'vdelta','x':x,'y':y},
                function(data){console.log(data)})
        }
    })()

    $('#f_off').click(function(){
        console.log('disconnect the video')
        $(this).addClass('active').siblings().removeClass('active')
    })
    $('#f_on').click(function(){
        console.log('connect the video')
        $(this).addClass('active').siblings().removeClass('active')
    })
    $('#f_video').click(function(){
        console.log('video broadcast')
        $(this).addClass('active').siblings().removeClass('active')
        $('#r_camera').removeClass().addClass('video');
    })
    $('#f_photo').click(function(){
        console.log('microscopic camera')
        $(this).addClass('active').siblings().removeClass('active')
        $('#r_camera').removeClass().addClass('photo');
    })
    $('#f_shot').click(function(){
        console.log('taking a picture')
        config.sender('shot')
    })
    $('#f_up').click(function(){
        console.log('moving on up ...')
        config.sender('up')
    })
    $('#f_down').click(function(){
        console.log('moving to down ...')
        config.sender('down')
    })
    $('#f_left').click(function(){
        console.log('rotate to left  ...')
        config.sender('left')
    })
    $('#f_right').click(function(){
        console.log('rotate to right ...')
        config.sender('right')
    })
    $('#f_stop').click(function(){
        console.log('stop de movement ...')
        config.sender('stop')
    })
    $('#f_vup').click(function(){
        console.log('up for the camera')
        config.sender('vup')
    })
    $('#f_vdown').click(function(){
        console.log('down for the camera')
        config.sender('vdown')
    })
    $('#f_vleft').click(function(){
        console.log('turn left for the camera')
        config.sender('vleft')
    })
    $('#f_vright').click(function(){
        console.log('turn right for the camera')
        config.sender('vright')
    })

    //joystick=new VirtualJoystick({
    //    container:document.getElementById('r_camera'),
    //    mouseSupport:true
    //});
    //setInterval(function(){config.vdelta(joystick.deltaX(),joystick.deltaY())},
    //    1/2*1000);
})

