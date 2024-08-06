/**
 * 使い方
 * 
 * 1st Step: node.jsとnpmをインストール
 * 2st Step: `npm install`で必要なモジュール群をインストール
 * 3rd Step: `npm test`で単体試験を実施
 * 
 * Refer to https://github.com/svgmap/svgmapjs/blob/main/README.md#development
 * 
 */

import {SvgImagesProps, SvgImageProps} from "../libs/SvgImagesProps";
import {jest} from "@jest/globals";

describe("unittest for SvgImagesProps.js",()=>{
    describe("target SvgImageProps class",()=>{
        let svgimageprops;
        beforeAll(()=>{
            svgimageprops = new SvgImageProps();
        });

        it("access to rootLayer property.", ()=>{
            svgimageprops.rootLayer = "root";
            expect(svgimageprops["iid1"].rootLayer).toBe("root");
        });

        it("access to controller property.", ()=>{
            svgimageprops.controller = "";
            expect(svgimageprops.controller).toBe("何が入っているの？");
            // src property
            svgimageprops.controller.src = "";
            expect(svgimageprops.controller.src).toBe("何が入っているの？");
            // url property
            svgimageprops.controller.url = "";
            expect(svgimageprops.controller.url).toBe("何が入っているの？");
        });

        it("access to path property.", ()=>{
            svgimageprops.path = "";
            expect(svgimageprops.controller).toBe("何が入っているの？");
        });
        
        it("access to rootLayer property.", ()=>{
            svgimageprops.rootLayer = "root";
            expect(svgimageprops.rootLayer).toBe("root");
        });

        it("access to commonQuery property.", ()=>{
            svgimageprops.commonQuery = "???";
            expect(svgimageprops.commonQuery).toBe("何が入っているの？");
        });
    });
    describe("target SvgImagesProps class",()=>{
        let svgimagesprops;

        beforeAll(()=>{
            svgimagesprops = new SvgImagesProps();
            let rootSvgImageProps = new SvgImageProps();
            rootSvgImageProps.Path.location.href = "http://hogehoge.com/fuga.svg"
            svgimagesprops["root"] = rootSvgImageProps;
        });

        it("access to specific id", ()=>{
            svgimagesprops["root"] = "rootLayer";
            expect(svgimagesprops["root"]).toBe("rootLayer");
        });
        
        it("access to specific id", ()=>{
            svgimagesprops["root"] = "rootLayer";
            expect(svgimagesprops["root"]).toBe("rootLayer");
        });
    });
});