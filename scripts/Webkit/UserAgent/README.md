# NOTES


## `ipsw`

```bash
❯ CGO_ENABLED=1 CGO_LDFLAGS=-L/opt/homebrew/lib CGO_CFLAGS=-I/opt/homebrew/include go run -tags frida ./cmd/ipsw/main.go frida objc -V -n 'Safari' -m '*[* *setApplicationNameForUserAgent:]'
```
```bash
   • Frida                     version=16.1.3
? Select what device to connect to: [USB   ] iDevice
   • Chosen device: iDevice
   • Searching process 'Safari'
      • Process                   name=Safari pid=1280
   • Attaching to process      name=Safari pid=1280
   • Loaded script
      • Hooking                   method='*[* *setApplicationNameForUserAgent:]'
   • Received 'log' - obj: <WKWebViewConfiguration: 0x1054a4ae0; processPool = <WKProcessPool: 0x10515e960; configuration = <_WKProcessPoolConfiguration: 0x10515ed10; injectedBundleURL: "file:///Applications/MobileSafari.app/PlugIns/Safari.wkbundle/">>; preferences = <WKPreferences: 0x105440070>>, sel: 0x1f42d96c8
   • Received 'send':
	- WKWebViewConfiguration(
		WKWebViewConfiguration * (/* <WKWebViewConfiguration: 0x1054a4ae0; processPool = <WKProcessPool: 0x10515e960; configuration = <_WKProcessPoolConfiguration: 0x10515ed10; injectedBundleURL: "file:///Applications/MobileSafari.app/PlugIns/Safari.wkbundle/">>; preferences = <WKPreferences: 0x105440070>> */ 0x1054a4ae0),
		SEL (/* setApplicationNameForUserAgent: */ 0x1f42d96c8),
		__NSCFString * (@"Version/14.0.3 Mobile/15E148 Safari/604.1")
	) -> void (0x1054e1e40)
      • Backtrace:
	0x104ec6ecc MobileSafari!0xfeecc (0x1000feecc)
	0x104ebbab8 MobileSafari!0xf3ab8 (0x1000f3ab8)
	0x104eba624 MobileSafari!0xf2624 (0x1000f2624)
	0x104eb7180 MobileSafari!0xef180 (0x1000ef180)
	0x104ea38fc MobileSafari!0xdb8fc (0x1000db8fc)
	0x104ea7484 MobileSafari!0xdf484 (0x1000df484)
	0x104ea7320 MobileSafari!0xdf320 (0x1000df320)
	0x104ea3fe8 MobileSafari!0xdbfe8 (0x1000dbfe8)
	0x104e1cd44 MobileSafari!0x54d44 (0x100054d44)
	0x104ea3eac MobileSafari!0xdbeac (0x1000dbeac)
	0x104ea3dbc /Applications/MobileSafari.app/MobileSafari!-[TabController _newTabFromTabViewButton]
	0x1aca5df38 UIKitCore!-[UIApplication sendAction:to:from:forEvent:]
	0x1ac049218 UIKitCore!-[UIBarButtonItem _triggerActionForEvent:]
	0x1ac0224b8 UIKitCore!__45-[_UIButtonBarTargetAction _invoke:forEvent:]_block_invoke
	0x1ac02236c UIKitCore!-[_UIButtonBarTargetAction _invoke:forEvent:]
	0x1aca5df38 UIKitCore!-[UIApplication sendAction:to:from:forEvent:]
```

## `frida-trace`

```bash
❯ frida-trace --decorate -i "*standardUserAgentWithApplicationName*" Safari -U
```