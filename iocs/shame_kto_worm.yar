/*
 * YARA rule: SHAME / kto — Minecraft plugin worm (HydraC2)
 * Detects infected .jar / .zip plugin files.
 * Works on raw jar/zip bytes (entry names and plugin.yml appear in headers).
 *
 * Rule name: SHAME_KTO_plugin_worm
 * Classification: TR/Java.Worm.SHAME (proposed), HydraC2-related
 */
rule SHAME_KTO_plugin_worm
{
    meta:
        description = "Minecraft plugin worm SHAME/kto (class kto.Core, marker .shame, HydraC2 RAT)"
        author      = "incident report / @oudsend"
        date        = "2026-09-05"
        hash_dropper_sha256 = "5ebaee3badb162d3a5a9402a27d535c7093572cb170a879ca5ff556543810e04"
        reference_c2 = "papa.ultimatebox.fun:20011"
        reference_drop = "https://kto.ultimatebox.fun/shame.jar"
        severity    = "high"

    strings:
        $kto_core     = "kto/Core.class"   ascii wide nocase
        $kto_shame    = "kto/Shame.class"  ascii wide nocase
        $kto_shame1   = "kto/Shame$1.class" ascii wide nocase
        $kto_shame2   = "kto/Shame$2.class" ascii wide nocase
        $marker       = ".shame"           ascii
        $main_core    = "main: kto.Core"   ascii wide nocase
        $orig_yml     = "plugin.yml.orig"  ascii wide nocase
        $drop_addr    = "papa.ultimatebox.fun" ascii wide nocase

    condition:
        filesize < 200MB and (
            ($kto_core or $kto_shame) and ($marker or $main_core)
        ) or (
            $main_core and $orig_yml
        ) or (
            ($kto_core or $kto_shame) and $drop_addr
        )
}

/*
 * NOTE: To scan .jar directly use --scan-zipped (yara 4.3+):
 *   yara64 -s -r shame_kto_worm.yar --scan-zipped=modules path/to/plugins
 * Without it, entry names still match as raw strings inside the zip headers.
 */