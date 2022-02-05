import { typeMap } from "@temp/blog/type";
import { useRouteLocale } from "@vuepress/client";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { resolveRouteWithRedirect } from "../utils";

import type { ComputedRef } from "vue";
import type { Articles } from "./types";
import type { TypeMap } from "../../shared";

// eslint-disable-next-line
declare const __VUE_HMR_RUNTIME__: Record<string, any>;
declare const BLOG_META_SCOPE: string;

export const blogTypeMap = ref(typeMap);

export const useBlogType = <
  T extends Record<string, unknown> = Record<string, unknown>
>(
  key: string
): ComputedRef<Articles<T>> => {
  const router = useRouter();
  const routeLocale = useRouteLocale();

  return computed(() => {
    const routes = router.getRoutes();
    const result: Articles<T> = [];

    for (const pageKey of blogTypeMap.value[key][routeLocale.value]) {
      const route = routes.find(({ name }) => name === pageKey);

      if (route) {
        const finalRoute = resolveRouteWithRedirect(route.path);

        result.push({
          path: finalRoute.path,
          meta:
            BLOG_META_SCOPE === ""
              ? (finalRoute.meta as T)
              : (finalRoute.meta[BLOG_META_SCOPE] as T),
        });
      }
    }

    return result;
  });
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
if (import.meta.webpackHot || import.meta.hot) {
  __VUE_HMR_RUNTIME__.updateBlogType = (map: Record<string, TypeMap>): void => {
    blogTypeMap.value = map;
  };
}
