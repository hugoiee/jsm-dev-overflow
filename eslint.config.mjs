import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: { root: true }, // Fixed the missing parameter
  ignorePatterns: ["components/ui/**"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "no-undef": "off",
      },
    },
  ],
  rules: {
    "import/order": [
      "error",
      {
        groups: [
          "builtin", // 内置类型排在第一位
          "external", // 外部库
          "internal", // 内部模块
          ["parent", "sibling"], // 父级和同级类型可以混合在一起
          "index", // 然后是索引文件
          "object", // 对象导入
        ],
        newlinesBetween: "always",
        pathGroups: [
          {
            pattern: "@app/**",
            group: "external",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "eslint:recommended",
    "standard",
    "plugin:tailwindcss/recommended",
    "prettier"
  ),
  ...compat.plugins("import", "promise", "n"),
];

export default eslintConfig;
