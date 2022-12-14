const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
require("webpack-dev-server");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

console.log(__dirname);
const isProduction = process.env.NODE_ENV === "production";
const getFileName = () => isProduction ? "[name].[contenthash]" : "[name]";

/**
 * @type {import("webpack").Configuration}
 */
const config = {
    entry: path.join(__dirname, "src", "index.tsx"),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.s?css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                type: "asset/resource",
                generator: {
                    filename: "assets/images/[name].[hash][ext][query]"
                }
            },
            {
                test: /\.svg$/,
                type: "asset/inline"
            },
            {
                test: /\.json$/,
                type: "json"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: false,
            title: "Customer++",
            template: path.join(__dirname, "src", "index.html"),
        }),
        new MiniCssExtractPlugin({
            filename: `assets/${getFileName()}.css`,
        })
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: `assets/${getFileName()}.js`,
        publicPath: "/",
        assetModuleFilename: "assets/[name][hash][ext][query]",
        clean: true
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".html"],
        alias: {
            "@assets": path.join(__dirname, "src", "assets"),
            "@common": path.join(__dirname, "src", "common"),
            "@testHelpers": path.join(__dirname, "src", "__testHelpers__"),
            "@pages": path.join(__dirname, "src", "pages"),
        }
    },
    devServer: {
        compress: true,
        port: 5050,
        static: {
            directory: path.join(__dirname, "public")
        },
        historyApiFallback: true,
        open: true
    },
    stats: {
        errorDetails: true,
        children: true
    },
}

module.exports = config;