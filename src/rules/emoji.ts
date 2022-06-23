// @ts-nocheck
import nameToEmoji from "gemoji/name-to-emoji.json";
import MarkdownIt from "markdown-it";
import emojiPlugin from "markdown-it-emoji";

export default function emoji(md: MarkdownIt): any {
  return emojiPlugin(md, {
    defs: nameToEmoji,
    shortcuts: {},
  });
}
