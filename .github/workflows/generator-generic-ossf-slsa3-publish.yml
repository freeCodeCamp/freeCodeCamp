# This workflow uses actions that are not certified by GitHub.
# They are provided by a third-party and are governed by
# separate terms of service, privacy policy, and support
# documentation.

# This workflow lets you generate SLSA provenance file for your project.
# The generation satisfies level 3 for the provenance requirements - see https://slsa.dev/spec/v0.1/requirements
# The project is an initiative of the OpenSSF (openssf.org) and is developed at
# https://github.com/slsa-framework/slsa-github-generator.
# The provenance file can be verified using https://github.com/slsa-framework/slsa-verifier.
# For more information about SLSA and how it improves the supply-chain, visit slsa.dev.

name: SLSA generic generator
on:
  workflow_dispatch:
  release:
    types: [created]

jobs:
  build:
    runs-on: ubuntu-latest
    outputs:
      digests: ${{ steps.hash.outputs.digests }}

    steps:
      - uses: actions/checkout@v3

      # ========================================================
      #
      # Step 1: Build your artifacts.
      #
      # ========================================================
      - name: Build artifacts
        run: |
            # These are some amazing artifacts.
            echo "artifact1" > artifact1
            echo "artifact2" > artifact2

      # ========================================================
      #
      # Step 2: Add a step to generate the provenance subjects
      #         as shown below. Update the sha256 sum arguments
      #         to include all binaries that you generate
      #         provenance for.
      #
      # ========================================================
      - name: Generate subject for provenance
        id: hash
        run: |
          set -euo pipefail

          # List the artifacts the provenance will refer to.
          files=$(ls artifact*)
          # Generate the subjects (base64 encoded).
          echo "hashes=$(sha256sum $files | base64 -w0)" >> "${GITHUB_OUTPUT}"

  provenance:
    needs: [build]
    permissions:
      actions: read   # To read the workflow path.
      id-token: write # To sign the provenance.
      contents: write # To add assets to a release.
    uses: slsa-framework/slsa-github-generator/.github/workflows/generator_generic_slsa3.yml@v1.4.0
    with:
      base64-subjects: "${{ needs.build.outputs.digests }}"
      upload-assets: true # Optional: Upload to a new release
