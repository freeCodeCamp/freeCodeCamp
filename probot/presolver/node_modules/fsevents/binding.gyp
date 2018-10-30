{
  "targets": [
    { "target_name": "" }
  ],
  "conditions": [
    ['OS=="mac"', {
      "targets": [{
        "target_name": "<(module_name)",
        "sources": ["fsevents.cc"],
        "xcode_settings": {
          "OTHER_LDFLAGS": [
            "-framework CoreFoundation -framework CoreServices"
          ]
        },
        "include_dirs": [
          "<!(node -e \"require('nan')\")"
        ]
      }, {
        "target_name": "action_after_build",
        "type": "none",
        "dependencies": ["<(module_name)"],
        "copies": [{
          "files": ["<(PRODUCT_DIR)/<(module_name).node"],
          "destination": "<(module_path)"
        }]
      }]
    }]
  ]
}
