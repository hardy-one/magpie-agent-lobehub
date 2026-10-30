# magpie-agent-lobehub

Draws [LobeHub](https://lobehub.com)'s calls as LobeHub on magpie's Routing and Usage pages, with its logo.

LobeHub reaches the gateway as a provider you point at it, so magpie never sets LobeHub up. Without a name of its own, magpie drew its calls by whatever the OpenAI SDK's class name was minified to — a single letter like `k` — with no logo.

## Install

```sh
magpie plugin add magpie-agent-lobehub
```

Or from this repository, or a folder:

```sh
magpie plugin add hardy-one/magpie-agent-lobehub
magpie plugin add ./magpie-agent-lobehub
```

## What it does

It adds `lobehub` as an agent magpie knows, with `ua: ["lobehub"]`. magpie then counts LobeHub's requests under that name instead of a minified SDK class, and draws them with LobeHub's own logo.

## Using it from LobeHub

Add a provider in LobeHub pointing at the gateway, and give it the key `magpie-lobehub`:

- Base URL: `http://127.0.0.1:3425/v1`
- API key: `magpie-lobehub`

magpie counts a call by the key when one names an agent, and by the first word of the `User-Agent` otherwise. Either way the call is LobeHub's.

## It stays off the Agents page

magpie lists an agent on the Agents page when `Detected()` says it is installed or configured, and for a plugin's agent that means its `config` file exists. This plugin names a file LobeHub never reads, so the file stays absent and the row does not appear. Leave the switch on that row alone; connecting LobeHub is the provider above, not a row in magpie.

## Logo

LobeHub's own, the colour one from [lobe-icons](https://github.com/lobehub/lobe-icons) (`packages/static-svg/icons/lobehub-color.svg`).

## Licence

MIT
