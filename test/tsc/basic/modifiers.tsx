import Vue, { VNode } from "vue";
import { modifiers as m } from "vue-tsx-support";

function modifiers() {
    <div onClick={m.prevent} />;
    <div onClick={m.prevent(_ => {})} />;
    <div onClick={m.prevent.stop} />;
    <div onKeydown={m.esc(e => console.log(e.keyCode))} />;
    <div onKeydown={m.enter(e => console.log(e.keyCode))} />;
    <div onKeydown={m.enter.prevent} />;
    <div onKeydown={m.enter.left.shift} />;
    // each modifiers can be specified only once
    <div onClick={m.prevent.prevent} />;    //// TS2339: 'prevent' does not exist
    <div onClick={m.left.left} />;    //// TS2339: 'left' does not exist
    <div onClick={m.left.alt.left} />;    //// TS2339: 'left' does not exist
    <div onClick={m.enter.enter} />;    //// TS2339: 'enter' does not exist
    // key modifier can be specified only once
    <div onKeydown={m.enter.esc} />;    //// TS2339: 'esc' does not exist
    <div onKeydown={m.enter.keys("esc")} />;    //// TS2339: 'keys' does not exist
    <div onKeydown={m.keys("up", "down", "left", "right").enter} />;    //// TS2339: 'enter' does not exist
    // xxx and noxxx can't be specified togetter
    <div onClick={m.ctrl.noctrl} />;    //// TS2339: 'noctrl' does not exist
    <div onClick={m.noctrl.ctrl} />;    //// TS2339: 'ctrl' does not exist
    <div onClick={m.shift.noshift} />;  //// TS2339: 'noshift' does not exist
    <div onClick={m.noshift.shift} />;  //// TS2339: 'shift' does not exist
    <div onClick={m.alt.noalt} />;      //// TS2339: 'noalt' does not exist
    <div onClick={m.noalt.alt} />;      //// TS2339: 'alt' does not exist
    <div onClick={m.meta.nometa} />;    //// TS2339: 'nometa' does not exist
    <div onClick={m.nometa.meta} />;    //// TS2339: 'meta' does not exist

}
