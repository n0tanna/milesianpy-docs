import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "MilesianPy",
      social: {
        github: "https://github.com/n0tanna/milesianpy",
      },
      sidebar: [
        {
          label: "Getting  Started",
          items: [],
        },
        {
          label: "Functions",
          items: [
            {
              label: "Calculations",
              items: [
                {
                  label: "No Variable Calculation",
                  items: [
                    {
                      label: "no_variable_basic_calculation",
                      slug: "functions/calculations/no-variable-calculation/no-variable-basic-calculation",
                    },
                  ],
                },
              ],
            },
            {
              label: "Parsers",
              items: [
                {
                  label: "Basic Parser",
                  items: [
                    {
                      label: "bracket_multiplication_insertion",
                      slug: "functions/parsers/basic-parser/bracket-multiplication-insertion",
                    },
                    {
                      label: "check_bracket_count",
                      slug: "functions/parsers/basic-parser/check-bracket-count",
                    },
                    {
                      label: "check_decimals",
                      slug: "functions/parsers/basic-parser/check-decimals",
                    },
                    {
                      label: "check_double_operator",
                      slug: "functions/parsers/basic-parser/check-double-operator",
                    },
                    {
                      label: "check_if_empty_bracket",
                      slug: "functions/parsers/basic-parser/check-if-empty-bracket",
                    },
                    {
                      label: "check_values",
                      slug: "functions/parsers/basic-parser/check-values",
                    },
                    {
                      label: "standardize_brackets",
                      slug: "functions/parsers/basic-parser/standardize-brackets",
                    },
                  ],
                },
                {
                  label: "Operator Parser",
                  items: [
                    {
                      label: "addition",
                      slug: "functions/parsers/operator-parser/addition",
                    },
                    {
                      label: "division",
                      slug: "functions/parsers/operator-parser/division",
                    },
                    {
                      label: "exponent",
                      slug: "functions/parsers/operator-parser/exponent",
                    },
                    {
                      label: "multiplication",
                      slug: "functions/parsers/operator-parser/multiplication",
                    },
                    {
                      label: "subtraction",
                      slug: "functions/parsers/operator-parser/subtraction",
                    },
                  ],
                },
                {
                  label: "Number Parser",
                  items: [
                    {
                      label: "convert_to_nums",
                      slug: "functions/parsers/number-parser/convert-to-nums",
                    },
                    {
                      label: "is_negative",
                      slug: "functions/parsers/number-parser/is-negative",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
