> **Warning**: This repository is deprecated. Please see [wundergraph](https://github.com/wundergraph/wundergraph).

# wunderctl - The WunderGraph Command Line Interface

You can use `wunderctl` to initialize new WunderGraph Applications and develop locally.
The CLI contains the Hyperfast Engine of WunderGraph, written in Golang and easy to use with the TypeScript SDK. 

The WunderGraph SDK is the easiest way to configure your WunderGraph applications.
It's written in TypeScript and allows you to configure every aspect of your WunderGraph applications via Code. 

WunderGraph follows best practices for infrastructure as code.
Instead of complex configurations via graphical user interfaces,
WunderGraph applications are primarily configured using code.

Your configuration can be stored alongside your application code in the `.wundergraph` directory,
keeping your application code and the API configurations in sync.

Using your CI-CD system of choice, you can deploy your WunderGraph APIs at the same time you're deploying your application code.
Go from development to production without touching a single button,
simply git push and everything gets deployed.

Both SDK and CLI build the perfect team to help you develop and ship WunderGraph applications.

## Getting Started

### Install the CLI

```shell
npm install -g @wundergraph/wunderctl
or
yarn global add @wundergraph/wunderctl
```

### Initialize a new Project

```shell
# default project without frameworks
wunderctl init

# nextjs starter
wunderctl init --template nextjs-starter

# nextjs with postgresql starter
wunderctl init --template nextjs-postgresql-starter

# you can also install the templates to a custom directory
wunderctl init -o /custom/dir
```

### Run

Once the CLI is installed and you've got a project initialized,
it's time to start it up.

```shell
# change into your wundergraph directory 
# in case you've used the default template, there is no .wundergraph directory
cd .wundergraph

# run wunderctl
wunderctl up

# you can also start in debug mode to get more verbose logs
wunderctl up --debug
```

## Docs

WunderGraph Features Overview:  
https://wundergraph.com/docs/overview/features/overview

A complete guide to building your first WunderGraph Application:  
https://wundergraph.com/docs/guides/your_first_wundergraph_application/overview

Overview of all supported DataSources:  
https://wundergraph.com/docs/overview/datasources/overview

Overview of all custom WunderGraph Directives and how to use them:  
https://wundergraph.com/docs/reference/directives/overview

Reference Documentation on how to configure your `wundergraph.config.ts`:  
https://wundergraph.com/docs/reference/wundergraph_config_ts/overview

The `wundergraph.config.ts` file is the central point of configuration for your WunderGraph Applications.

Reference Documentation on how to configure your `wundergraph.operations.ts`:  
https://wundergraph.com/docs/reference/wundergraph_operations_ts/overview

The `wundergraph.operations.ts` is a separate configure file,
dedicated to configuring your Operations.
Learn more on how [Operations work in WunderGraph](https://wundergraph.com/docs/overview/features/json_rpc).

Reference Documentation on how to configure your `wundergraph.hooks.ts`,
the file to define custom Hooks to extend your WunderGraph Application with custom business logic and side effects:  
https://wundergraph.com/docs/reference/wundergraph_hooks_ts/overview

## Examples

NextJS TypeScript Realtime Chat:  
https://github.com/wundergraph/nextjs-typescript-postgresql-graphql-realtime-chat

Demo using Apollo Federation, REST, GraphQL & Mock APIs, all in one:  
https://github.com/wundergraph/wundergraph-demo

Demonstration of Polyglot persistence, using the exact same API with two different data stores, PostgreSQL or MySQL: https://github.com/wundergraph/polyglot-persistence-postgresql-mysql-graphql

## Development

1. Clone the repository: https://github.com/wundergraph/sdk
2. Initialize a new project with `wunderctl init -o .wundergraph` from the root of the sdk
3. Change the directory to `.wundergraph` and install the dependencies using `yarn or npm install`
4. Open the file `.wundergraph/wundergraph.config.ts`, the imports will point to `@wundergraph/sdk`
5. Change the imports from `@wundergraph/sdk` to `../src` so that you use your local sdk instead of the npm sdk
6. From the directory `.wundergraph`, run `wunderctl up` to start WunderGraph using your local sdk

### Notes

When changing the handlebars templates for the Code Generator, a build step is required,
otherwise you will not see your changes when running `wunderctl up` again.

Run `yarn build` from the root of the sdk to update the templates in the `dist` directory.
