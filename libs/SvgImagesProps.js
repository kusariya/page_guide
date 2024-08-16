class SvgImagesProps extends Map{

}

/**
 * 
 */
class SvgImageProps{
    /**
     * 
     */

    constructor(documentPath){
        this.Path = documentPath;
        this.refresh = []; //これがデフォルトを設定すべきなのか不明
        this.altdMap = new WeakMap();
        this.styleMap = new WeakMap();
        this.CRS = new Map();
    }
}


export { SvgImagesProps, SvgImageProps};
