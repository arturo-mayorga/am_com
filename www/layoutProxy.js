function LayoutProxy()
{
    var _children = [];

    this.addChild = function (child)
    {
         _children.push(child);
    }

    this.populate = function()
    {
        var i = 0;
        for ( i = 0; i < _children.length; i++ )
        {
            _children[i].populate();
        }
    }


    this.stopAnimations = function()
    {   
        var i = 0;
        for ( i = 0; i < _children.length; i++ )
        {
            _children[i].stopAnimations();
        }
    }

    this.update = function()
    {
        this.stopAnimations();
    
        var i = 0;
        for ( i = 0; i < _children.length; i++ )
        {
            _children[i].layoutUpdate();
        }
    }
}
