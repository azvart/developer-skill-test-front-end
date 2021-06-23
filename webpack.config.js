const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCss = require("mini-css-extract-plugin");
module.exports = {
    entry: "./src/index",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [{
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            // {
            //     test: /\.css$/,
            //     use: ["style-loader", "css-loader"],
            // },
            {
                test: /\.(s*)css$/,
                use: [miniCss.loader, "css-loader", "sass-loader"],
            },
            // {
            //     test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            //     loader: "file-loader",
            // },
            // {
            //     test: /\.svg$/,
            //     use: ["@svgr/webpack"],
            // },
            // {
            //     test: /\.svg$/,
            //     use: ["@svgr/webpack", "url-loader"],
            // },
            {
                test: /\.svg$/,
                loader: "svg-inline-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new miniCss({ filename: "style.css" }),
    ],
    devServer: {
        overlay: true,
        open: true,
    },
};