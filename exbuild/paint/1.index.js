(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./wasm_bindgen_paint.js":
/*!*******************************!*\
  !*** ./wasm_bindgen_paint.js ***!
  \*******************************/
/*! exports provided: start, __widl_f_set_property_CSSStyleDeclaration, __widl_instanceof_CanvasRenderingContext2D, __widl_f_begin_path_CanvasRenderingContext2D, __widl_f_stroke_CanvasRenderingContext2D, __widl_f_line_to_CanvasRenderingContext2D, __widl_f_move_to_CanvasRenderingContext2D, __widl_f_create_element_Document, __widl_f_body_Document, __widl_f_add_event_listener_with_callback_EventTarget, __widl_instanceof_HTMLCanvasElement, __widl_f_get_context_HTMLCanvasElement, __widl_f_set_width_HTMLCanvasElement, __widl_f_set_height_HTMLCanvasElement, __widl_f_style_HTMLElement, __widl_f_offset_x_MouseEvent, __widl_f_offset_y_MouseEvent, __widl_f_append_child_Node, __widl_instanceof_Window, __widl_f_document_Window, __wbg_newnoargs_96cbdf0d056b2fa8, __wbg_call_ee8306f6b79399de, __wbindgen_object_clone_ref, __wbindgen_object_drop_ref, __wbindgen_cb_drop, __wbindgen_cb_forget, __wbindgen_rethrow, __wbindgen_closure_wrapper109, __wbindgen_defer_start, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return start; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_set_property_CSSStyleDeclaration\", function() { return __widl_f_set_property_CSSStyleDeclaration; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_CanvasRenderingContext2D\", function() { return __widl_instanceof_CanvasRenderingContext2D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_begin_path_CanvasRenderingContext2D\", function() { return __widl_f_begin_path_CanvasRenderingContext2D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_stroke_CanvasRenderingContext2D\", function() { return __widl_f_stroke_CanvasRenderingContext2D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_line_to_CanvasRenderingContext2D\", function() { return __widl_f_line_to_CanvasRenderingContext2D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_move_to_CanvasRenderingContext2D\", function() { return __widl_f_move_to_CanvasRenderingContext2D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_create_element_Document\", function() { return __widl_f_create_element_Document; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_body_Document\", function() { return __widl_f_body_Document; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_add_event_listener_with_callback_EventTarget\", function() { return __widl_f_add_event_listener_with_callback_EventTarget; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_HTMLCanvasElement\", function() { return __widl_instanceof_HTMLCanvasElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_context_HTMLCanvasElement\", function() { return __widl_f_get_context_HTMLCanvasElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_set_width_HTMLCanvasElement\", function() { return __widl_f_set_width_HTMLCanvasElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_set_height_HTMLCanvasElement\", function() { return __widl_f_set_height_HTMLCanvasElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_style_HTMLElement\", function() { return __widl_f_style_HTMLElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_offset_x_MouseEvent\", function() { return __widl_f_offset_x_MouseEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_offset_y_MouseEvent\", function() { return __widl_f_offset_y_MouseEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_append_child_Node\", function() { return __widl_f_append_child_Node; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_Window\", function() { return __widl_instanceof_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_document_Window\", function() { return __widl_f_document_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_96cbdf0d056b2fa8\", function() { return __wbg_newnoargs_96cbdf0d056b2fa8; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_ee8306f6b79399de\", function() { return __wbg_call_ee8306f6b79399de; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_cb_drop\", function() { return __wbindgen_cb_drop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_cb_forget\", function() { return __wbindgen_cb_forget; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return __wbindgen_rethrow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper109\", function() { return __wbindgen_closure_wrapper109; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_defer_start\", function() { return __wbindgen_defer_start; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _wasm_bindgen_paint_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_bindgen_paint_bg */ \"./wasm_bindgen_paint_bg.wasm\");\n/* tslint:disable */\n\n\n/**\n* @returns {void}\n*/\nfunction start() {\n    return _wasm_bindgen_paint_bg__WEBPACK_IMPORTED_MODULE_0__[\"start\"]();\n}\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _wasm_bindgen_paint_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint32Memory = new Uint32Array(_wasm_bindgen_paint_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint32Memory;\n}\n\nconst slab = [{ obj: undefined }, { obj: null }, { obj: true }, { obj: false }];\n\nlet slab_next = slab.length;\n\nfunction addHeapObject(obj) {\n    if (slab_next === slab.length) slab.push(slab.length + 1);\n    const idx = slab_next;\n    const next = slab[idx];\n\n    slab_next = next;\n\n    slab[idx] = { obj, cnt: 1 };\n    return idx << 1;\n}\n\nconst stack = [];\n\nfunction getObject(idx) {\n    if ((idx & 1) === 1) {\n        return stack[idx >> 1];\n    } else {\n        const val = slab[idx >> 1];\n\n        return val.obj;\n\n    }\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? __webpack_require__(/*! util */ \"../../node_modules/util/util.js\").TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _wasm_bindgen_paint_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_wasm_bindgen_paint_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nconst __widl_f_set_property_CSSStyleDeclaration_target = typeof CSSStyleDeclaration === 'undefined' ? null : CSSStyleDeclaration.prototype.setProperty || function() {\n    throw new Error(`wasm-bindgen: CSSStyleDeclaration.setProperty does not exist`);\n};\n\nfunction __widl_f_set_property_CSSStyleDeclaration(arg0, arg1, arg2, arg3, arg4, exnptr) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    let varg3 = getStringFromWasm(arg3, arg4);\n    try {\n        __widl_f_set_property_CSSStyleDeclaration_target.call(getObject(arg0), varg1, varg3);\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __widl_instanceof_CanvasRenderingContext2D(idx) {\n    return getObject(idx) instanceof CanvasRenderingContext2D ? 1 : 0;\n}\n\nconst __widl_f_begin_path_CanvasRenderingContext2D_target = typeof CanvasRenderingContext2D === 'undefined' ? null : CanvasRenderingContext2D.prototype.beginPath || function() {\n    throw new Error(`wasm-bindgen: CanvasRenderingContext2D.beginPath does not exist`);\n};\n\nfunction __widl_f_begin_path_CanvasRenderingContext2D(arg0) {\n    __widl_f_begin_path_CanvasRenderingContext2D_target.call(getObject(arg0));\n}\n\nconst __widl_f_stroke_CanvasRenderingContext2D_target = typeof CanvasRenderingContext2D === 'undefined' ? null : CanvasRenderingContext2D.prototype.stroke || function() {\n    throw new Error(`wasm-bindgen: CanvasRenderingContext2D.stroke does not exist`);\n};\n\nfunction __widl_f_stroke_CanvasRenderingContext2D(arg0) {\n    __widl_f_stroke_CanvasRenderingContext2D_target.call(getObject(arg0));\n}\n\nconst __widl_f_line_to_CanvasRenderingContext2D_target = typeof CanvasRenderingContext2D === 'undefined' ? null : CanvasRenderingContext2D.prototype.lineTo || function() {\n    throw new Error(`wasm-bindgen: CanvasRenderingContext2D.lineTo does not exist`);\n};\n\nfunction __widl_f_line_to_CanvasRenderingContext2D(arg0, arg1, arg2) {\n    __widl_f_line_to_CanvasRenderingContext2D_target.call(getObject(arg0), arg1, arg2);\n}\n\nconst __widl_f_move_to_CanvasRenderingContext2D_target = typeof CanvasRenderingContext2D === 'undefined' ? null : CanvasRenderingContext2D.prototype.moveTo || function() {\n    throw new Error(`wasm-bindgen: CanvasRenderingContext2D.moveTo does not exist`);\n};\n\nfunction __widl_f_move_to_CanvasRenderingContext2D(arg0, arg1, arg2) {\n    __widl_f_move_to_CanvasRenderingContext2D_target.call(getObject(arg0), arg1, arg2);\n}\n\nconst __widl_f_create_element_Document_target = typeof Document === 'undefined' ? null : Document.prototype.createElement || function() {\n    throw new Error(`wasm-bindgen: Document.createElement does not exist`);\n};\n\nfunction __widl_f_create_element_Document(arg0, arg1, arg2, exnptr) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    try {\n        return addHeapObject(__widl_f_create_element_Document_target.call(getObject(arg0), varg1));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nfunction GetOwnOrInheritedPropertyDescriptor(obj, id) {\n    while (obj) {\n        let desc = Object.getOwnPropertyDescriptor(obj, id);\n        if (desc) return desc;\n        obj = Object.getPrototypeOf(obj);\n    }\nreturn {}\n}\n\nconst __widl_f_body_Document_target = GetOwnOrInheritedPropertyDescriptor(typeof Document === 'undefined' ? null : Document.prototype, 'body').get || function() {\n    throw new Error(`wasm-bindgen: Document.body does not exist`);\n};\n\nfunction __widl_f_body_Document(arg0) {\n\n    const val = __widl_f_body_Document_target.call(getObject(arg0));\n    return isLikeNone(val) ? 0 : addHeapObject(val);\n\n}\n\nconst __widl_f_add_event_listener_with_callback_EventTarget_target = typeof EventTarget === 'undefined' ? null : EventTarget.prototype.addEventListener || function() {\n    throw new Error(`wasm-bindgen: EventTarget.addEventListener does not exist`);\n};\n\nfunction __widl_f_add_event_listener_with_callback_EventTarget(arg0, arg1, arg2, arg3, exnptr) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    try {\n        __widl_f_add_event_listener_with_callback_EventTarget_target.call(getObject(arg0), varg1, getObject(arg3));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __widl_instanceof_HTMLCanvasElement(idx) {\n    return getObject(idx) instanceof HTMLCanvasElement ? 1 : 0;\n}\n\nconst __widl_f_get_context_HTMLCanvasElement_target = typeof HTMLCanvasElement === 'undefined' ? null : HTMLCanvasElement.prototype.getContext || function() {\n    throw new Error(`wasm-bindgen: HTMLCanvasElement.getContext does not exist`);\n};\n\nfunction __widl_f_get_context_HTMLCanvasElement(arg0, arg1, arg2, exnptr) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    try {\n\n        const val = __widl_f_get_context_HTMLCanvasElement_target.call(getObject(arg0), varg1);\n        return isLikeNone(val) ? 0 : addHeapObject(val);\n\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nconst __widl_f_set_width_HTMLCanvasElement_target = GetOwnOrInheritedPropertyDescriptor(typeof HTMLCanvasElement === 'undefined' ? null : HTMLCanvasElement.prototype, 'width').set || function() {\n    throw new Error(`wasm-bindgen: HTMLCanvasElement.width does not exist`);\n};\n\nfunction __widl_f_set_width_HTMLCanvasElement(arg0, arg1) {\n    __widl_f_set_width_HTMLCanvasElement_target.call(getObject(arg0), arg1);\n}\n\nconst __widl_f_set_height_HTMLCanvasElement_target = GetOwnOrInheritedPropertyDescriptor(typeof HTMLCanvasElement === 'undefined' ? null : HTMLCanvasElement.prototype, 'height').set || function() {\n    throw new Error(`wasm-bindgen: HTMLCanvasElement.height does not exist`);\n};\n\nfunction __widl_f_set_height_HTMLCanvasElement(arg0, arg1) {\n    __widl_f_set_height_HTMLCanvasElement_target.call(getObject(arg0), arg1);\n}\n\nconst __widl_f_style_HTMLElement_target = GetOwnOrInheritedPropertyDescriptor(typeof HTMLElement === 'undefined' ? null : HTMLElement.prototype, 'style').get || function() {\n    throw new Error(`wasm-bindgen: HTMLElement.style does not exist`);\n};\n\nfunction __widl_f_style_HTMLElement(arg0) {\n    return addHeapObject(__widl_f_style_HTMLElement_target.call(getObject(arg0)));\n}\n\nconst __widl_f_offset_x_MouseEvent_target = GetOwnOrInheritedPropertyDescriptor(typeof MouseEvent === 'undefined' ? null : MouseEvent.prototype, 'offsetX').get || function() {\n    throw new Error(`wasm-bindgen: MouseEvent.offsetX does not exist`);\n};\n\nfunction __widl_f_offset_x_MouseEvent(arg0) {\n    return __widl_f_offset_x_MouseEvent_target.call(getObject(arg0));\n}\n\nconst __widl_f_offset_y_MouseEvent_target = GetOwnOrInheritedPropertyDescriptor(typeof MouseEvent === 'undefined' ? null : MouseEvent.prototype, 'offsetY').get || function() {\n    throw new Error(`wasm-bindgen: MouseEvent.offsetY does not exist`);\n};\n\nfunction __widl_f_offset_y_MouseEvent(arg0) {\n    return __widl_f_offset_y_MouseEvent_target.call(getObject(arg0));\n}\n\nconst __widl_f_append_child_Node_target = typeof Node === 'undefined' ? null : Node.prototype.appendChild || function() {\n    throw new Error(`wasm-bindgen: Node.appendChild does not exist`);\n};\n\nfunction __widl_f_append_child_Node(arg0, arg1, exnptr) {\n    try {\n        return addHeapObject(__widl_f_append_child_Node_target.call(getObject(arg0), getObject(arg1)));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __widl_instanceof_Window(idx) {\n    return getObject(idx) instanceof Window ? 1 : 0;\n}\n\nfunction __widl_f_document_Window(arg0) {\n\n    const val = getObject(arg0).document;\n    return isLikeNone(val) ? 0 : addHeapObject(val);\n\n}\n\nfunction __wbg_newnoargs_96cbdf0d056b2fa8(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    return addHeapObject(new Function(varg0));\n}\n\nfunction __wbg_call_ee8306f6b79399de(arg0, arg1, exnptr) {\n    try {\n        return addHeapObject(getObject(arg0).call(getObject(arg1)));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __wbindgen_object_clone_ref(idx) {\n    // If this object is on the stack promote it to the heap.\n    if ((idx & 1) === 1) return addHeapObject(getObject(idx));\n\n    // Otherwise if the object is on the heap just bump the\n    // refcount and move on\n    const val = slab[idx >> 1];\n    val.cnt += 1;\n    return idx;\n}\n\nfunction dropRef(idx) {\n\n    idx = idx >> 1;\n    if (idx < 4) return;\n    let obj = slab[idx];\n\n    obj.cnt -= 1;\n    if (obj.cnt > 0) return;\n\n    // If we hit 0 then free up our space in the slab\n    slab[idx] = slab_next;\n    slab_next = idx;\n}\n\nfunction __wbindgen_object_drop_ref(i) {\n    dropRef(i);\n}\n\nfunction __wbindgen_cb_drop(i) {\n    const obj = getObject(i).original;\n    dropRef(i);\n    if (obj.cnt-- == 1) {\n        obj.a = 0;\n        return 1;\n    }\n    return 0;\n}\n\nconst __wbindgen_cb_forget = dropRef;\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropRef(idx);\n    return ret;\n}\n\nfunction __wbindgen_rethrow(idx) { throw takeObject(idx); }\n\nfunction __wbindgen_closure_wrapper109(a, b, fi, di, _ignored) {\n    const f = _wasm_bindgen_paint_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_function_table\"].get(fi);\n    const d = _wasm_bindgen_paint_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_function_table\"].get(di);\n    const cb = function(arg0) {\n        this.cnt++;\n        let a = this.a;\n        this.a = 0;\n        try {\n            return f(a, b, addHeapObject(arg0));\n\n        } finally {\n            this.a = a;\n            if (this.cnt-- == 1) d(this.a, b);\n\n        }\n\n    };\n    cb.a = a;\n    cb.cnt = 1;\n    let real = cb.bind(cb);\n    real.original = cb;\n    return addHeapObject(real);\n}\n\nfunction __wbindgen_defer_start() {\n    Promise.resolve().then(() => _wasm_bindgen_paint_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_start\"]());\n}\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"]))\n\n//# sourceURL=webpack:///./wasm_bindgen_paint.js?");

/***/ }),

/***/ "./wasm_bindgen_paint_bg.wasm":
/*!************************************!*\
  !*** ./wasm_bindgen_paint_bg.wasm ***!
  \************************************/
/*! exports provided: memory, __rustc_debug_gdb_scripts_section__, start, __wbindgen_start, __wbg_function_table */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./wasm_bindgen_paint */ \"./wasm_bindgen_paint.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./wasm_bindgen_paint_bg.wasm?");

/***/ })

}]);