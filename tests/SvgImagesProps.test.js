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

        it("access Attributes.", ()=>{
            svgimageprops.rootLayer = "root";
            expect(svgimageprops.rootLayer).toBe("root");
            expect(svgimageprops.noChache).toBe(true);
            expect(svgimageprops.Path).toBe("??");
            expect(svgimageprops.Script).toBe("??");
            expect(svgimageprops.CRS).toBe("??");
            expect(svgimageprops.refresh).toBe("??");
            expect(svgimageprops.loadError).toBe(true);
            expect(svgimageprops.styleMap).toBe("??");
            expect(svgimageprops.altdMap).toBe("??");
            expect(svgimageprops.isSVG2).toBe("??");
            expect(svgimageprops.parentDocId).toBe("??");
            expect(svgimageprops.childImages).toBe("??");
            expect(svgimageprops.isClickable).toBe(true);
            expect(svgimageprops.editalble).toBe(true);
            expect(svgimageprops.metaSchema).toBe(true);
            expect(svgimageprops.domMutationObserver).toBe("??"); // これはデフォルトの機能なので単体試験いらんかも
        });

        // TODO: svgImagesProps[id]=functionというケースあり、要確認

        it("access to controller Attributes.", ()=>{
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
            svgimageprops.Path = "";
            expect(svgimageprops.Path).toBe("何が入っているの？");
        });
        
        it("access to script attributes.",()=>{

            expect(svgimageprops.script.actualViewBox).toBe("");
            expect(svgimageprops.script.childDocOp).toBe("");
            expect(svgimageprops.script.CRS).toBe("");
            expect(svgimageprops.script.docId).toBe("");
            expect(svgimageprops.script.drawGeoJson).toBe("");
            expect(svgimageprops.script.geoViewBox).toBe("");
            expect(svgimageprops.script.getCanvasSize).toBe("");
            expect(svgimageprops.script.getCORSURL).toBe("");
            expect(svgimageprops.script.initialLoad).toBe("");
            expect(svgimageprops.script.initObject).toBe("");
            expect(svgimageprops.script.isIntersect).toBe("");
            expect(svgimageprops.script.linkedDocOp).toBe("");
            expect(svgimageprops.script.location).toBe("");
            expect(svgimageprops.script.onload).toBe("");
            expect(svgimageprops.script.refreshScreen).toBe("");
            expect(svgimageprops.script.scale).toBe("");
            expect(svgimageprops.script.transform).toBe("");
            expect(svgimageprops.script.verIE).toBe("");
            expect(svgimageprops.script.viewport).toBe("");
            expect(svgimageprops.script.handleScriptCf()).toBe("");
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