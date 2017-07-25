
import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll
{
    /*
    constructor()
    {
        this.itemsToReveal =$(".feature-item, .testimonials");
        this.hideInitially();
        this.createWayPoints();

    }
    */

    constructor(els,offSet)
    {
        this.itemsToReveal =els;
        this.offsetP=offSet;
        this.hideInitially();
        this.createWayPoints();
    }

    hideInitially()
    {
        this.itemsToReveal.addClass("reveal-item");
        //$(".feature-item").addClass("reveal-item");
    }

    createWayPoints()
    {
        var that = this;
        this.itemsToReveal.each(function(){
                var currentItem = this;
                new Waypoint
                (
                    {
                       element: currentItem,
                       handler: function()
                       {
                            $(currentItem).addClass("reveal-item--is-visible");
                       },

                       offset: that.offsetP
                    }
                );
            }
        );
    }


}

export default RevealOnScroll;
