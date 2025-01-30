const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { DefinePlugin } = require("webpack");

module.exports = (env, argv) => {
    const mode = argv.mode || "development";
    return {
        mode,
        entry: "./src/index.tsx",
        output: {
            filename: "[name].[contenthash].js",
            chunkFilename: "[name].[contenthash].js",
            path: path.resolve(__dirname, "dist"),
            clean: true,
        },
        optimization: {
            runtimeChunk: "single",
            splitChunks: {
                chunks: "all",
            },
            minimizer: [
                new TerserPlugin({
                    extractComments: false,
                    terserOptions: {
                        compress: {
                            drop_console: true,
                        },
                    },
                }),
            ],
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx"],
        },
        devtool: "inline-source-map",
        devServer: {
            static: {
                directory: path.join(__dirname, "dist"),
            },
            port: 3000,
            hot: true,
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: ["thread-loader", "babel-loader"],
                    exclude: /node_modules/,
                },
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: [
                        process.env.NODE_ENV === "production" ? MiniCssExtractPlugin.loader : "style-loader",
                        "css-loader",
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    type: "asset",
                    parser: {
                        dataUrlCondition: {
                            maxSize: 214 * 1024, // 10 KB
                        },
                    },
                    generator: {
                        filename: "images/[name].[contenthash][ext]",
                    },
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html", // Нужно создать index.html в папке src
            }),
            new MiniCssExtractPlugin({
                filename: "[name].[contenthash].css",
            }),
            new DefinePlugin({
                "process.env.NODE_ENV": JSON.stringify(mode),
            }),
        ],
    };
};
