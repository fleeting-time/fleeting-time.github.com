function jsonp(options)
{
    options=options || {};
    var url=options.url;
    if(!url)
    {
        return;
    }

    var data=options.data || {};

    var cbName=options.cbName || 'cb';

    var fnName='jsonp_'+Math.random();
    fnName=fnName.replace('.','');

    window[fnName]=function(json)
    {
        options.success && options.success(json);
        oHead.removeChild(oSc);
       window[fnName]=null;
    }

    var oSc=document.createElement('script');
    data[cbName]=fnName;
    oSc.src=url+'?'+json2arr(data);
    var oHead=document.getElementsByTagName('head')[0];
    oHead.appendChild(oSc);

}
function json2arr(json)
{
    var arr=[];
    for(var name in json)
    {
        arr.push(name+'='+json[name])
    }
   return  arr.join('&');
}
