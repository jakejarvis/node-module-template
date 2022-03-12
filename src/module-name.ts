export interface Options {
  /**
   * Make it do something.
   *
   * @default false
   */
  readonly doSomething?: boolean;
}

/**
 * Does pretty much nothing, contrary to its name.
 *
 * @example
 * ```
 * import { something } from "@jakejarvis/my-module";
 *
 * something({ doSomething: true });
 * ```
 */
export const something = function (options: Options) {
  options = options || {};
  if (options.doSomething) {
    console.info("well hello there");
  }
};
