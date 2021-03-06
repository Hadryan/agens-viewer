

export  let selectedLabel = {
    node: {},
    edge: {}
  }
  
export const stylesheet = [
    {
      selector: 'node',
      style: {
        width: function (ele) { return ele == null ? 55 : ele.data('size'); },
        height: function (ele) { return ele == null ? 55 : ele.data('size'); },
        label: function (ele) { const captionProp = ele.data('caption'); return ele == null ? '' : getLabel(ele, captionProp); },
        'background-color': function (ele) { return ele == null ? '#FFF' : ele.data('backgroundColor'); },
        'border-width': "3px",
        'border-color': function (ele) { return ele == null ? '#FFF' : ele.data('borderColor'); },
        'border-opacity': 0.6,
        "text-valign": "center",
        "text-halign": "center",
        color: function (ele) { return ele == null ? '#FFF' : ele.data('fontColor'); },
        "font-size": "10px",
        "text-wrap": "ellipsis",
        "text-max-width": function (ele) { return ele == null ? 55 : ele.data('size'); }
      }
    },
    {
      selector: 'node.highlight',
      style: {
        'border-width': "6px",
        'border-color': "#B2EBF4"
      }
    },
    {
      selector: 'node:selected',
      style: {
        'border-width': "6px",
        'border-color': "#B2EBF4"
      }
    },
    {
      selector: 'edge',
      style: {
        width: function (ele) { return ele == null ? 1 : ele.data('size'); },
        label: function (ele) { const captionProp = ele.data('caption'); return ele == null ? '' : getLabel(ele, captionProp); },
        'text-background-color': '#FFF',
        'text-background-opacity': 1,
        'text-background-padding': '3px',
        'line-color': function (ele) { return ele == null ? '#FFF' : ele.data('backgroundColor'); },
        'target-arrow-color': function (ele) { return ele == null ? '#FFF' : ele.data('backgroundColor'); },
        'target-arrow-shape': 'triangle',
        'curve-style': 'bezier',
        color: function (ele) { return ele == null ? '#FFF' : ele.data('fontColor'); },
        "font-size": "10px",
        "text-rotation": "autorotate"
      }
    },
    {
      selector: 'edge.highlight',
      style: {
        width: function (ele) { return ele == null ? 1 : ele.data('size'); },
        'line-color': "#B2EBF4",
        'target-arrow-color': "#B2EBF4",
        'target-arrow-shape': 'triangle',
        'curve-style': 'bezier'
      }
    },
    {
      selector: 'edge:selected',
      style: {
        width: function (ele) { return ele == null ? 1 : ele.data('size'); },
        'line-color': "#B2EBF4",
        'target-arrow-color': "#B2EBF4",
        'target-arrow-shape': 'triangle',
        'curve-style': 'bezier'
      }
    }
  ]

  const getLabel = (ele, captionProp) => {
    if (captionProp === 'gid') {
      ele.isNode() ? selectedLabel.node[ele.data('label')] = 'gid' : selectedLabel.edge[ele.data('label')] = 'gid'
      return "[ " + ele.data('id') + " ]"
    } else if (captionProp === 'label') {
      ele.isNode() ? selectedLabel.node[ele.data('label')] = 'label' : selectedLabel.edge[ele.data('label')] = 'label'
      return "[ :" + ele.data('label') + " ]"
    } else {
      const props = ele.data('properties')
      if (props[captionProp] === undefined) { 
        ele.isNode() ? selectedLabel.node[ele.data('label')] = 'gid' : selectedLabel.edge[ele.data('label')] = 'gid'
        return "[ " + ele.data('id') + " ]"
      }
      else { 
        ele.isNode() ? selectedLabel.node[ele.data('label')] = captionProp : selectedLabel.edge[ele.data('label')] = captionProp
        return props[captionProp] 
      }
    }
  }
  