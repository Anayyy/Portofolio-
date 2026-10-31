import nextVitals from "eslint-config-next/core-web-vitals";
const eslintConfig = [...nextVitals, { ignores: [".next/**", "node_modules/**", "public/**", "assets/**"] }];
export default eslintConfig;
