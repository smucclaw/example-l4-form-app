# Scaffolding a web form declaratively with L4

In this example web form app, we demonstrate how you can declaratively scaffold a web form app from a L4 specification of the form data classes or types. More precisely: you're just scaffolding the frontend here; you would still need to do more work to get the backend going.

The workflow is roughly this:

1. Specify the classes or types in L4 (see [spreadsheet for a minimal example](https://docs.google.com/spreadsheets/d/1WyzDqaVTcicDa2K_mzS_SGtLZL4SnzzfYHUDdtBDxUA/edit#gid=1753095612))
2. Compile (i.e., transform) that L4 to JSON Schema by
   - **either** by clicking on "14. Export JSON Schema" in the sidebar and copying and pasting the file manually.
   - **or** downloading the spreadsheet as a CSV file (e.g. `myExample.csv`), and compiling it manually running `stack run -- --workdir=workdir myExample.csv` in the [natural4](https://github.com/smucclaw/dsl/tree/main/lib/haskell/natural4) source directory.
3. Check the `toplevel` property of the generated schema. The transpiler just chooses a toplevel in the order of the definitions, so if it is an object that you don't want, e.g.
   ```json
   "toplevel":{"$ref": "#/$defs/Address"}
   ```
   you need to change it into the correct object:
   ```json
   "toplevel":{"$ref": "#/$defs/Person"}
   ```
4. Put that JSON Schema in the JSON Forms skeletal web app: [src/formtypes/schema.json](src/formtypes/schema.json) in this directory.

## To run this app

- First install deps: `pnpm install`
- Then `pnpm start`

Browse to http://localhost:3000 to see the application in action.

## More about this example app

This example is based on the simple JSON Forms React app described at [their React tutorial](https://jsonforms.io/docs/tutorial). In the simplest version of this, we simply took that tutorial to get the basic React app going, generated a new `schema.json` from the L4 specification at [Google sheets](https://docs.google.com/spreadsheets/d/1WyzDqaVTcicDa2K_mzS_SGtLZL4SnzzfYHUDdtBDxUA/edit#gid=1753095612), removed their old `uischema.json`, and made some minor and obvious UI tweaks.

# Things we plan to do when time permits

- demonstrate how you can also declaratively populate the UI-related _text_ in the web form from a separate .yaml and markdown files

# For more information on JSON Forms or on aspects of this seed app that _aren't_ about L4,

please see

- [Json Forms docs](https://jsonforms.io/)
- [the JSON Forms react seed app](https://github.com/eclipsesource/jsonforms-react-seed)
