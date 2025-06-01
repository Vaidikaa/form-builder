import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-CQ7AVJZR.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.tsx"
  );
  import.meta.hot.lastModified = "1748669212310.7446";
}
console.log("testPing is:", void 0);
function Index() {
  _s();
  const selectedFieldId = (void 0)((state) => state.selectedFieldId);
  const fields = (void 0)((state) => state.fields);
  const setSelectedField = (void 0)((state) => state.setSelectedField);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex gap-6 p-6 bg-gray-100 min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(void 0, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(void 0, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 41,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col flex-grow gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(void 0, { onFieldClick: setSelectedField }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(void 0, {}, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(void 0, { selectedFieldId }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(void 0, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 47,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(void 0, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_s(Index, "AJ7Wu7T52i1VaL0jzxRmFbAaBZU=", false, function() {
  return [void 0, void 0, void 0];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-D53KDG5K.js.map
