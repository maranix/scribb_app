const ENABLE_STATUS = ["ENABLED", "DISABLED"] as const;

const PREVIEW_TYPE = [
	"LIVE",
	"SPLIT_HORIZONTAL", // Column Arrangement
	"SPLIT_VERTICAL", // Row Arrangement
] as const;

type EditorPreviewStatus = (typeof ENABLE_STATUS)[number];
type EditorPreviewType = (typeof PREVIEW_TYPE)[number];

type ToggleCallback = (checked: boolean) => void;

export type { ToggleCallback, EditorPreviewStatus, EditorPreviewType };
