// 情報種別
value={selectedInformationType?.id || ""}
onChange={(e) => {
  const selected = informationTypes.find(i => i.id === e.target.value)
  setSelectedInformationType(selected)
}}
renderValue={(value) =>
  value === "" ? "すべて" : selectedInformationType?.name ?? ""
}

// 公開先
value={selectedPublicTarget?.id || ""}
onChange={(e) => {
  const selected = publicTargets.find(i => i.id === e.target.value)
  setSelectedPublicTarget(selected)
}}
renderValue={(value) =>
  value === "" ? "すべて" : selectedPublicTarget?.name ?? ""
}

// ステータス
value={selectedStatus?.id || ""}
onChange={(e) => {
  const selected = statuses.find(i => i.id === e.target.value)
  setSelectedStatus(selected)
}}
renderValue={(value) =>
  value === "" ? "すべて" : selectedStatus?.name ?? ""
}

// SL
value={selectedSl?.id || ""}
onChange={(e) => {
  const selected = slList.find(i => i.id === e.target.value)
  setSelectedSl(selected)
}}
renderValue={(value) =>
  value === "" ? "すべて" : selectedSl?.name ?? ""
}

// ECT
value={selectedEct?.id || ""}
onChange={(e) => {
  const selected = ectList.find(i => i.id === e.target.value)
  setSelectedEct(selected)
}}
renderValue={(value) =>
  value === "" ? "すべて" : selectedEct?.name ?? ""
}



const [selectedInformationType, setSelectedInformationType] = 
  useState<InformationTypeInfo | undefined>(undefined)
const [selectedPublicTarget, setSelectedPublicTarget] = 
  useState<PublicTargetInfo | undefined>(undefined)
const [selectedStatus, setSelectedStatus] = 
  useState<StatusInfo | undefined>(undefined)
const [selectedSl, setSelectedSl] = 
  useState<SlInfo | undefined>(undefined)
const [selectedEct, setSelectedEct] = 
  useState<EctInfo | undefined>(undefined)


const clearHandler = useCallback(() => {
  setSearchParams(INITIAL_PARAMS)
  setSelectedInformationType(undefined)
  setSelectedPublicTarget(undefined)
  setSelectedStatus(undefined)
  setSelectedSl(undefined)
  setSelectedEct(undefined)
}, [])

